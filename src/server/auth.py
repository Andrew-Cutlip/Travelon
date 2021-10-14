import bcrypt

from src.db.db import is_username_available


def is_password_valid(password: str) -> bool:
    return True


def is_username_valid(username: str) -> bool:
    return is_username_available(username)


def salt_hash_password(password: str):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf8'), salt)
    return hashed


def check_password(password: str, hash) -> bool:
    pass_check = bcrypt.checkpw(password.encode('utf8'), hash)
    return pass_check
