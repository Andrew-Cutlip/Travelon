import bcrypt

from main import db


# will want to add more validation here later
def is_password_valid(password: str) -> bool:
    return True


# will want to add more validation here later
def is_username_valid(username: str) -> bool:
    return db.is_username_available(username)


def salt_hash_password(password: str):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf8'), salt)
    return hashed


def check_password(password: str, hashed) -> bool:
    pass_check = bcrypt.checkpw(password.encode('utf8'), hashed)
    return pass_check
