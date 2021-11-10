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


@app.route("/static/<path:path>")
def send_static_file(path):
    return send_from_directory("./static", path)


@app.route("/make-post", methods=["POST"])
def post():
    json = request.json
    # need to check authentication for user
    authenticated = True
    response = {
        "error": False,
        "message": "Post added successfully"
    }
    if authenticated:
        title = json["title"]
        body = json["body"]
        location = json["location"]
    else:
        response["error"] = True
        response["message"] = "Error: Not authenticated user"

    return jsonify(response)


@app.route("/get-posts", methods=["GET"])
def get_post():
    json = request.json
    user = json["user"]
    location = json["location"]

