import json
from flask import jsonify, request, Blueprint
from config import TEAM_NAME
from pyrebase import pyrebase

login_handler = Blueprint('ping_handler', __name__)

firebaseConfig = {
  "apiKey": "AIzaSyC3R0WyJqIebFKIauw-BZ3ANd4mwTdEXvU",
  "authDomain": "deltahacks2021-78be0.firebaseapp.com",
  'projectId': "deltahacks2021-78be0",
  "storageBucket": "deltahacks2021-78be0.appspot.com",
  "messagingSenderId": "974523835590",
  "appId": "1:974523835590:web:cd629ecd8247928d40e3c7",
  "measurementId": "G-LE6LLLY99C"
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

@login_handler.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        body = json.loads(request.get_data())
        print(body)
        # email = request.form['name']
        # password = request.form['password']
        # try:
        #     auth.sign_in_with_email_and_password(email, password)
        #     #user_id = auth.get_account_info(user['idToken'])
        #     #session['usr'] = user_id
        # except:
            
        # body = json.loads(request.get_data())
        # if body['teamName'] in TEAM_NAME.split(','):
        #     return jsonify({'response': "{} is now part of the team".format(body['teamName'])}), 200
        # else:
        #     return jsonify({'response': "{} is not part of the team, change your .env".format(body['teamName'])}), 400
