import os

import main as main

cwd = os.getcwd()
print(f"Current directory: {cwd}\n")
# os.chdir(".../")
from flask import Flask, request, send_from_directory, jsonify

app = Flask(__name__)

from . import auth
from . import models

BASE_PATH = os.path.join(os.path.dirname(__file__), "..")
static = os.path.join(BASE_PATH, "static")
print(static)


@app.route('/')
@app.route('/home')
def home():
    return send_from_directory("./static", "index.html")


@app.route('/about')
def about():
    return "About"


@app.route("/register", methods=["POST"])
def register():
    # got stuff!
    print("Got a register request!")
    json = {
        "loggedIn": False,
        "errors": [],
        "success": False,
    }
    if request.method == "POST":
        json_data = request.json
        username = json_data["username"]
        password = json_data["password"]
        if auth.is_username_valid(username) and auth.is_password_valid(password):
            # TODO register user
            hashed = auth.salt_hash_password(password)
            new_user = models.User()
            new_user.CreateUser(username, hashed)
            json["success"] = True
        else:
            error = "Invalid username / password"
            json["errors"].append(error)
    print(json)
    return jsonify(json)


@app.route("/login", methods=["POST"])
def login():
    # got stuff!
    json = {
        "loggedIn": False,
        "errors": [],
        "success": False,
    }
    print("Got a login Request!")
    if request.method == "POST":
        json_data = request.json
        username = json_data["username"]
        password = json_data["password"]
        # TODO look up username and see if password matches
        if main.database.check_user_password(username , password):
            new_user = models.User()
            new_user.start_session(main.database.get_user(username))
            json["loggedIn"] = True
            json["success"] = True
        else:
            error = "Invalid username / password"
            json["errors"].append(error)
    print(json)
    return jsonify(json)


@app.route("/rating", methods=["POST"])
def rating():
    json = {
        "errors": [],
        "restaurant": [],
        "success": False,
    }
    print("Got a post Request!")
    if request.method == "POST":
        json_data = request.json
        restaurant = json_data["restaurant"]
        if main.database.display_restaurant(restaurant):
            json["restaurant"].append(main.database.display_restaurant(restaurant))
            json["success"] = True
        else:
            error = "Incorrect restaurant name entered"
            json["errors"].append(error)
    print(json)
    return jsonify(json)


@app.route("/static/<path:path>")
def send_static_file(path):
    return send_from_directory("./static", path)
