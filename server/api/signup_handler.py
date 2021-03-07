import json
from flask import jsonify, request, Blueprint
from config import TEAM_NAME

#firebase implementation
import pyrebase

firebaseConfig = {
    "apiKey": "AIzaSyC3R0WyJqIebFKIauw-BZ3ANd4mwTdEXvU",
    "authDomain": "deltahacks2021-78be0.firebaseapp.com",
    "databaseURL": "https://deltahacks2021-78be0-default-rtdb.firebaseio.com",
    "projectId": "deltahacks2021-78be0",
    "storageBucket": "deltahacks2021-78be0.appspot.com",
    "messagingSenderId": "974523835590",
    "appId": "1:974523835590:web:793aaee57e22dd4a40e3c7",
    "measurementId": "G-RDDBVYNMYG"
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

login_handler = Blueprint('login_handler', __name__)

@login_handler.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        body = json.loads(request.get_data())
        
        user = auth.create_user_with_email_and_password(body['username'],body['password'])
        return jsonify({'response': "{} is now part of the team".format(body['teamName'])}), 200
