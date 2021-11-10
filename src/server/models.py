from flask import jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
import main
import uuid


class User:

    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        return jsonify(user), 200

    def CreateUser(self, username, hashed):
        print(request.form)

        # Create the user object
        user = {
            "user_id": uuid.uuid4().hex,
            "username": username,
            "password_hash": hashed,
            "friends": [],
        }

        if main.database.insert_user(user):
            return self.start_session(user)

        return jsonify({"error": "Signup failed"}), 400

    def signout(self):
        session.clear()
        return redirect('/home')

