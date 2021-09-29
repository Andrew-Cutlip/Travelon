import src.db as db


def is_password_valid(password: str) -> bool:
    return True


def is_username_valid(username: str) -> bool:
    return db.is_username_available(username)
