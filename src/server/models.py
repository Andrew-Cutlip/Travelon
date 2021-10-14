from flask import jsonify, request, session, redirect
from passlib.hash import pbkdf2_sha256
from main import db
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
            "password_hash": hashed
        }

        if db.insert_user(user):
            return self.start_session(user)

        return jsonify({"error": "Signup failed"}), 400

    def signout(self):
        session.clear()
        return redirect('/')

    def viewUser(self):

        user = db.users.find_one({
            "email": request.form.get('email')
        })

        if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
            return self.start_session(user)

        return jsonify({"error": "Invalid login credentials"}), 401
