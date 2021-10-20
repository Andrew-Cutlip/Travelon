import main as main


# will want to add more validation here later
def is_password_valid(password: str) -> bool:
    return True


# will want to add more validation here later
def is_username_valid(username: str) -> bool:
    return main.database.is_username_available(username)


def salt_hash_password(password: str):
    hashed = main.database.salt_hash_password(password)
    return hashed


def check_password(username: str, password: str, hashed) -> bool:
    pass_check = main.database.check_user_password(username , password , hashed)
    return pass_check
