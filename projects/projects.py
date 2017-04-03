# Projects.py - A flask app for displaying current projects
# TODO: Create CRUD buttons
# TODO: Create MongoDB connection
# A py by Zachary E. Sohovich

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask.ext.pymongo import PyMongo


app = Flask(__name__)
mongo = PyMongo(app)

@app.route('/')
def projects():
    return render_template('index.html')

if __name__=="__main__":
    app.run()
