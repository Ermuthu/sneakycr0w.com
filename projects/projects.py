# Projects.py - A flask app for displaying current projects
# TODO: Create MongoDB connection
# TODO: Create CRUD buttons
# A py by Zachary E. Sohovich

from flask import Flask, render_template
from flask.ext.pymongo import PyMongo

app = Flask(__name__)
mongo = PyMongo(app)

@app.route('/', METHODS=['GET'])
def projects():
    # Return current collection/document of projects
    return render_template('index.html')

@app.route('/add', METHODS=['POST'])
def add_project():
    # Return form for adding a new project
    return redirect('/')

if __name__=="__main__":
    app.run()
