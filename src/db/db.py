import pymongo
from pymongo import MongoClient
import os
from src.server.auth import *
from src import *
# starts to connect to db on port 27017
# client = MongoClient("0.0.0.0", 27017)

PASSWORD = os.getenv("db-Password")
client = pymongo.MongoClient(f"mongodb+srv://cse442:{PASSWORD}@cluster0.zrs6a.mongodb.net/test?retryWrites=true&w=majority")

db = client["test"]

# Collection (Table)
users = db.users


# get database
def start_database():
    print("Getting database\n")


def insert_user(user_id: int, username: str, password: str):
    hashed = salt_hash_password(password)
    user = {
        "user_id": user_id,
        "username": username,
        "password_hash": hashed
    }
    print(f"Inserting user {username}\n")
    users.insert_one(user)


def remove_user(user_id: int):
    pass


def check_user_password(username: str, password: str) -> bool:
    user = users.find_one(username)
    if user is None:
        return False
    hash = user["password_hash"]
    pass_check = check_password(password, hash)
    return pass_check
    

def get_user(username: str) -> dict:
    user = users.find_one(username)
    print(f"Got user {username}\n")
    return user


def is_username_available(username: str) -> bool:
    user = users.find_one(username)
    if user is None:
        return True
    return False


# run this file
if __name__ == "__main__":
    test_username = "Steve"
    pswd = "123"
    insert_user(0, test_username, pswd)
    user1 = get_user("Steve")
    print(user1)
