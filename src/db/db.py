import pymongo
from pymongo import MongoClient
import os

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


def insert_user(user_id: int, username: str):
    user = {
        "user_id": user_id,
        "username": username
    }
    print(f"Inserting user {username}\n")
    users.insert_one(user)


def get_user(username: str) -> dict:
    user = users.find_one(username)
    print(f"Got user {username}\n")
    return user


# run this file
if __name__ == "__main__":
    test_username = "Steve"
    insert_user(0, test_username)
    user1 = get_user("Steve")
    print(user1)
