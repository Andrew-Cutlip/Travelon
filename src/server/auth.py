import src.db as db
import bcrypt


def is_password_valid(password: str) -> bool:
    return True


def is_username_valid(username: str) -> bool:
    return db.is_username_available(username)


def salt_hash_password(password: str):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password, salt)
    return hashed
