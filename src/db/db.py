import pymongo
from pymongo import MongoClient
import os
from server.auth import *


class Database:
    def __init__(self):
        self.users = []
        self.cities = []

    def add_city(self, city_name: str):
        pass

    def get_cities(self) -> list:
        pass

    def insert_user(self, user_id: int, username: str, password: str):
        pass

    def get_user(self, username: str) -> dict:
        pass

    def is_username_available(self,username: str) -> bool:
        pass

    def remove_user(self, user_id: int):
        pass


class DBStub(Database):
    def __init__(self):
        super().__init__()

    def add_city(self, city_name: str):
        self.cities.append(city_name)

    def get_cities(self) -> list:
        return self.cities

    def insert_user(self, user_id: int, username: str, password: str):
        hashed = salt_hash_password(password)
        user = {
            "user_id": user_id ,
            "username": username ,
            "password_hash": hashed
        }
        self.users.append(user)

    def remove_user(self, user_id: int):
        pass

    def get_user(self,username: str) -> dict:
        for user in self.users:
            if username == user["username"]:
                return user
        return {}

    def is_username_available(self,username: str) -> bool:
        usernames = [user["username"] for user in self.users]
        return  username not in usernames


class RealDatabase(Database):
    def __init__(self):
        super().__init__()
        self.PASSWORD = os.environ.get("dbPassword")
        print(self.PASSWORD)
        if self.PASSWORD is None:
            self.PASSWORD = "Supersecurepassword"

        self.client = pymongo.MongoClient(
            f"mongodb+srv://app442:{self.PASSWORD}@cluster0.zrs6a.mongodb.net/test?retryWrites=true&w=majority",
            connectTimeoutMS=30000, socketTimeoutMS=None, socketKeepAlive=True, connect=False, maxPoolsize=1,
            authSource='admin')

        self.db = self.client["test"]
        # Collection (Table)
        self.users = self.db.users
        self.cities = self.db.cities

    def add_city(self, cityname: str):
        city = {
            "name": cityname
        }
        self.cities.insert_one(city)

    def get_cities(self):
        ret = []
        print("Getting cities")
        for city in self.cities.find():
            ret.append(city)
        return ret

    def insert_user(self, user_id: int, username: str, password: str):
        hashed = salt_hash_password(password)
        user = {
            "user_id": user_id,
            "username": username,
            "password_hash": hashed
        }
        print(f"Inserting user {username}\n")
        self.users.insert_one(user)

    def remove_user(self, user_id: int):
        pass

    def check_user_password(self,username: str, password: str) -> bool:
        user = self.users.find_one(username)
        if user is None:
            return False
        hashed = user["password_hash"]
        pass_check = check_password(password, hashed)
        return pass_check

    def get_user(self,username: str) -> dict:
        user = self.users.find_one(username)
        print(f"Got user {username}\n")
        return user

    def is_username_available(self,username: str) -> bool:
        user = self.users.find_one(username)
        if user is None:
            return True
        return False


