import sys
import os
cwd = os.getcwd()
print(f"Current dirctory: {cwd}\n")
#os.chdir(".../")
from db import db
from .auth import is_username_valid, is_password_valid


from flask import Flask, render_template, request, send_from_directory, url_for

from src.db.db import check_user_password, get_user
from src.server.auth import is_username_valid, is_password_valid, salt_hash_password, check_password
from src.server.models import User
app = Flask(__name__)

BASE_PATH = os.path.join(os.path.dirname(__file__), "..")
static = os.path.join(BASE_PATH, "static")
print(static)


@app.route('/')
@app.route('/home')
def home():
    cities = db.get_cities()
    return render_template('home.html', cities=cities)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route("/register")
def register():
    # got stuff!
    error = []
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if is_username_valid(username) and is_password_valid(password):
            # TODO register user
            hashed = salt_hash_password(password)
            new_user = User()
            new_user.CreateUser(username, hashed)
        else:
            error = "Invalid username / password"
    return "Registration page"


@app.route("/login")
def login():
    # got stuff!
    error = []
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        # TODO look up username and see if password matches
        if check_user_password(username, password):
            new_user = User()
            new_user.start_session(get_user(username))
    return app.send_static_file("index.html")


@app.route("/static/<path:path>")
def send_static_file(path):
    return send_from_directory("./static", path)


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5000
    host = "0.0.0.0"
    app.run(host=host, port=port)
    db = db.Database()
