import bcrypt
from src.db import db


def is_password_valid(password: str) -> bool:
    return True


def is_username_valid(username: str) -> bool:
    return db.is_username_available(username)


def salt_hash_password(password: str):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password, salt)
    return hashed


def check_password(password: str, hash) -> bool:
    pass_check = bcrypt.checkpw(password, hash)
    return pass_check
