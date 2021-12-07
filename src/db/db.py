from statistics import mean

import bcrypt
import pymongo
import os

from flask import jsonify


class Database:
    def __init__(self):
        self.users = []
        self.cities = []
        self.restaurant = []
        self.posts = []

    def add_city(self, city_name: str):
        pass

    def get_cities(self) -> list:
        pass

    def insert_user(self, user: dict):
        pass

    def get_user(self, username: str) -> dict:
        pass

    def is_username_available(self, username: str) -> bool:
        pass

    def remove_user(self, user_id: int):
        pass

    def salt_hash_password(self, password: str):
        pass

    def check_user_password(self, username: str, password: str) -> bool:
        pass

    def add_friend(self, username:str):
        pass

    def get_all_friends(self):
        pass

    def get_a_friend(self, username:str):
        pass

    def star_rating(self, num_star_filled: int, comment: str, username: str):
        pass

    def add_restaurants(self, restaurant_name):
        pass

    def get_restaurants(self) -> list:
        pass

    def display_restaurant(self, restaurants: str):
        pass

    def add_post(self, post: dict):
        pass

    def get_posts_for_user(self, user_id):
        pass

    def get_posts_for_location(self, location: str):
        pass
    def show_all_locations(self, location: str):
        pass


class DBStub(Database):
    def __init__(self):
        super().__init__()

    def add_city(self, city_name: str):
        self.cities.append(city_name)

    def get_cities(self) -> list:
        return self.cities

    def insert_user(self, user: dict):
        self.users.append(user)

    def remove_user(self, user_id: int):
        pass

    def get_user(self, username: str) -> dict:
        for user in self.users:
            if username == user["username"]:
                return user
        return {}

    def is_username_available(self, username: str) -> bool:
        usernames = [user["username"] for user in self.users]
        return username not in usernames

    def salt_hash_password(self, password: str):
        return password

    def check_user_password(self, username: str, password: str) -> bool:
        user = self.get_user(username)
        if user is None:
            return False
        hashed = user["password_hash"]
        return hashed == password

    def add_friend(self, username:str, friend:str):
        user = self.get_user(username)
        if user is None:
            return False
        self.users.update({'username': username}, {'$push' : {'friends': friend}})

    def get_all_friends(self):
        return self.friends

    def get_a_friend(self, username: str):
        return self.friends

    def star_rating(self, num_star_filled: int, comment: str, username: str):
        user_comment = self.get_user(username)
        if num_star_filled <= 5:
            return num_star_filled, user_comment

    def add_restaurants(self, restaurant_name):
        restaurant = {
            "name": restaurant_name,
            "user_Id": []
        }
        self.restaurant.append(restaurant)

    def get_restaurants(self) -> list:
        return self.restaurant

    def display_restaurant(self, restaurants: str):
        get_restaurant = self.restaurant.find_one({"name": restaurants})
        print(f"Got restaurant {restaurants}\n")
        return get_restaurant

    def add_post(self, post: dict):
        self.posts.append(post)

    def get_posts_for_user(self, user_id):
        posts = [
            post for post in self.posts
            if post["user_id"] == user_id
        ]
        return posts

    def get_posts_for_location(self, location: str):
        posts = [
            post for post in self.posts
            if post["location"] == location
        ]
        return posts

    def get_all_posts(self):
        posts = [
            post for post in self.posts
        ]
        return posts


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
        self.friends = self.db.friends

        self.posts = self.db.posts
        # add ratings function
        self.ratings = self.db.ratings
        self.restaurant = self.db.restaurant

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

    def insert_user(self, user: dict):
        self.users.insert_one(user)

    def remove_user(self, user_id: int):
        pass

    def check_user_password(self, username: str, password: str) -> bool:
        user = self.get_user(username)
        if user is None:
            return False
        hashed = user["password_hash"]
        pass_check = self.compare_password(password, hashed)
        return pass_check

    def compare_password(self, password, hashed) -> bool:
        pass_check = bcrypt.checkpw(password.encode('utf8'), hashed)
        return pass_check

    def get_user(self, username: str) -> dict:
        user_cur = self.users.find_one({"username": username})
        print(f"Got user {username}\n")
        user = {
            "user_id": user_cur["user_id"],
            "username": user_cur["username"],
            "password_hash": user_cur["password_hash"],
            "friends": user_cur["friends"]
        }
        return user

    def is_username_available(self, username: str) -> bool:
        user = self.users.find_one(username)
        print("user is:", user)
        if user is None:
            return True
        return False

    def salt_hash_password(self, password: str):
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode('utf8'), salt)
        return hashed

    def add_friend(self, username:str, friend:str):
        self.users.update({'username' : username}, {'$push' : {'friends': friend}})

    def get_all_friends(self):
        allfriends = []
        for f in self.friends.find():
            allfriends.append(f)
        return allfriends

    def get_a_friend(self,username:str):
        allfriends = []
        for f in self.friends.find({"username": username}):
            allfriends.append(f)
        return allfriends

    def star_rating(self, num_star_filled: int, comment: str, username: str):
        user = self.get_user(username)
        if user is None:
            return False
        if num_star_filled <= 5:
            return num_star_filled, comment

    def add_restaurants(self, restaurant_name):
        restaurant = {
            "name": restaurant_name,
            "user_Id": []
        }
        self.restaurant.insert_one(restaurant)

    def add_restaurants_rating(self, restaurant_name, num_star_filled, comments, user):
        self.db.restaurant.update_one({"name": restaurant_name},
                                      {"$push": {"user_Id": user, "rating": num_star_filled, "comment": comments}})

    def get_restaurants(self):
        restaurants = []
        print("Getting restaurants")
        for restaurant in self.restaurant.find():
            restaurants.append(restaurant)
        return restaurants

    def display_restaurant(self, restaurants: str):
        get_restaurant = self.restaurant.find_one({"name": restaurants})
        print(f"Got restaurant {restaurants}\n")
        return get_restaurant

    def add_post(self, post: dict):
        self.posts.insert_one(post)

    def get_posts_for_user(self, user_id):
        posts = self.posts.find({"user_id": user_id})
        return posts

    def get_posts_for_location(self, location: str):
        posts = self.posts.find({"location": location})
        return posts

    def get_all_posts(self):
        posts = self.posts.find({})
        print(posts)
        ret = []
        for post in posts:
            new = {
                "title": post["title"],
                "summary": post["summary"],
                "location": post["location"]
            }
            ret.append(new)
        return ret

    def change_username(self, username: str, newusername: str) -> bool:
        if self.is_username_available(newusername):
            self.users.update_one({"username": username}, {"$set": {"username": newusername}})
            return True
        return False

    def change_password(self, username: str, newpassword: str) -> bool:
        if self.is_username_available(newpassword):
            self.users.update_one({"username": username}, {"$set": {"password_hash": newpassword}})
            return True
        return False

    def show_all_locations(self, location: str):
        list = []
        all = []
        for x in self.restaurant.find( {"location":{ "$eq" : [location]}}):
            list.append(x)
            print(list)
        for i in list:
            i['_id'] = 0
        list = sorted(list, key=lambda x: mean(x['rating']))
        for i in reversed(list):
            newlist = []
            newlist.append(i)
            all.append(newlist)
        print(all)
        return all

