import os
from flask.helpers import url_for
from werkzeug.utils import redirect
import secrets
import string
import main as main

cwd = os.getcwd()
print(f"Current directory: {cwd}\n")
# os.chdir(".../")
from flask import Flask, request, send_from_directory, jsonify

app = Flask(__name__)

from . import auth
from . import models
from . import validation

BASE_PATH = os.path.join(os.path.dirname(__file__), "..")
static = os.path.join(BASE_PATH, "static")
print(static)

app.secret_key = 'simple'.encode('utf8')


def make_cookie():
    size = 20
    cookie = "".join(secrets.choice(string.ascii_letters + string.digits) for i in range(size))
    return cookie


@app.route('/')
@app.route('/home')
def home():
    """user_id = request.cookies.get('sessioncookie')
    if user_id:
        user = main.database.get_user_by_id(user_id)
        if user:"""
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


@app.route("/login", methods=["POST","GET"])
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
        if main.database.check_user_password(username, password):
            # new_user = models.User()
            # new_user.start_session(main.database.get_user(username))
            json["loggedIn"] = True
            json["success"] = True
            user = main.database.get_user(username)
            response = jsonify(json)
            # make cookie
            cookie = make_cookie()
            # set cookie in db
            main.database.set_user_cookie(username, cookie)
            # set cookie in response
            response.set_cookie('session-cookie', cookie)
            print("Set cookie!")
            return response
        else:
            error = "Invalid username / password"
            json["errors"].append(error)
    print(json)
    return jsonify(json)


@app.route("/rating", methods=["POST"])
def rating():

    cookie = request.cookies.get('session-cookie')
    user = None
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
    if user is not None:
        json = {
            "username": [],
            "venue": [],
            "location": [],
            "stars": [],
            "comment": [],
        }
        print("Got a post Request!")
        if request.method == "POST":
            json_data = request.json
            venue = json_data["Name"]
            location = json_data["location"]
            stars = int(json_data["starRating"])
            comment = json_data["comment"]
            username = user["username"]
            if main.database.get_restaurants(venue):
                main.database.add_restaurants_rating(venue, stars, comment, username)
                return jsonify(json)
            else:
                main.database.add_restaurants(venue, location, stars, comment, username)
                return redirect(url_for('login'))
    else:
        return redirect(url_for('login'))


@app.route("/static/<path:path>")
def send_static_file(path):
    return send_from_directory("./static", path)


@app.route("/friends", methods=["POST"])
def friends():
    cookie = request.cookies.get('session-cookie')
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
        if user:
            json = {
                "errors": [],
                "friends": []
            }
            print("Add friend Request!")
            if request.method == "POST":
                json_data = request.json
                username = json_data["username"]
                friend = json_data["friend"]
                # TODO look up username and see if password matches
                if main.database.is_username_available(friend):
                    main.database.add_friend(username,friend)
                    json["friends"] = main.database.get_user(username)["friends"]
                else:
                    error = "User does not exit"
                    json["errors"].append(error)
            print(json)
            return jsonify(json)
        else:
            return redirect(url_for('login'))
    else:
        return redirect(url_for('login'))
    

@app.route("/make-post", methods=["POST"])
def post():
    authenticated = False
    cookie = request.cookies.get('session-cookie')
    user = None
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
        print(user)
        if user is not None:
            authenticated = True
    json = request.json
    # need to check authentication for user
    response = {
        "error": False,
        "message": "Post added successfully"
    }
    if authenticated:
        # need a way to get user_id
        title = json["title"]
        summary = json["summary"]
        location = json["location"]
        # check for images selected
        images = json.get("images")
        # check for ratings selected
        ratings = json.get("ratings")
        author = None
        if user is not None:
            author = user["username"]
            print(f"Author {author}")

        post = {
            "title": title,
            "summary": summary,
            "location": location,
            "author": author
        }
        if images is not None:
            post["images"] = images
        if ratings is not None:
            post["ratings"] = ratings

        valid = validation.validate_post(post)
        if valid:
            main.database.add_post(post)
        else:
            response["error"] = True
            response["message"] = "Error: Post not valid, ratings and images ccan only be used for one post."
    else:
        response["error"] = True
        response["message"] = "Error: Not authenticated user"
    return jsonify(response)


@app.route("/get-posts", methods=["GET"])
def get_post():
    # don't need login to see posts
    # get all posts at first
    posts = main.database.get_all_posts()
    response = {
        "posts": tuple(posts)
    }
    return jsonify(response)


@app.route("/change", methods=["POST"])
def usernameChange():
    cookie = request.cookies.get('session-cookie')
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
        if user:
            json = {
                "loggedIn": False ,
                "errors": [],
                "success": False,
            }
            print("Got a username change Request!")
            if request.method == "POST":
                json_data = request.json
                username = json_data["username"]
                new_username = json_data["newusername"]
                password = json_data["password"]
                # TODO look up username and see if password matches
                if main.database.check_user_password(username, password) and new_username != "":
                    auth.changeuser(username, new_username)

                else:
                    error = "Invalid username / password"
                    json["errors"].append(error)
            print(json)
            return jsonify(json)
        else:
            return redirect(url_for('login'))
    else:
        return redirect(url_for('login'))
    # got stuff!


@app.route("/change", methods=["POST"])
def passwordChange():
    # got stuff!
    cookie = request.cookies.get('session-cookie')
    json = {
        "loggedIn": False ,
        "errors": [] ,
        "success": False ,
    }
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
        if user:
            print("Got a password change Request!")
            if request.method == "POST":
                json_data = request.json
                username = json_data["username"]
                password = json_data["password"]
                new_password = json_data["newpassword"]
                # TODO look up username and see if password matches
                if main.database.check_user_password(username, password) and new_password != "":
                    auth.changepassword(username, new_password)
                else:
                    error = "Invalid username / password"
                    json["errors"].append(error)
            print(json)
            return jsonify(json)
        else:
            error = "Invalid username / password"
            json["errors"].append(error)
    print(json)
    return jsonify(json)


@app.route("/rankings", methods=["POST"])
def rankings():
    # got stuff!
    json = []
    print("Got a Ranking request!")
    if request.method == "POST":
        json_data = request.json
        location = json_data["location"]
        print(location)
        json = (main.database.show_all_locations(location))

    print(json)
    return jsonify(json)


@app.route("/upload", methods=["POST"])
def upload():
    cookie = request.cookies.get('session-cookie')
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
        if user:
            authenticated = True
    print("Got a photo upload request!")
    json = request.json
    response ={
        "error": False,
        "message": "Photo(s) added succesfully"
    }
    if authenticated:
        photos = json.get("photos")

    if request.method == "POST":
        json_data = request.json
        user = main.database.get_user_by_cookie(cookie)
        username = user["username"]
        url = json_data["url"]
        json = (main.database.add_photo(username, url))['photos']

    print(json)
    return jsonify(json)


@app.route("/getphotos", methods=["POST"])
def load():
    cookie = request.cookies.get('session-cookie')
    if cookie:
        user = main.database.get_user_by_cookie(cookie)
        if user:
            authenticated = True
    json = request.json
    print("Got a display photos request!")
    if request.method == "POST":
        json_data = request.json
        user = main.database.get_user_by_cookie(cookie)
        username = user["username"]
        print(json_data)
        json = (main.database.get_photos(username))['photos']

    print(json)
    return jsonify(json)