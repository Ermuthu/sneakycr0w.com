from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
# db = SQLAlchemy(app)
#
# class Project(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(80), unique=True)
#     desc = db.Column(db.String(150))
#     img_url = db.Column(db.String(40))

@app.route('/')
def projects():
    # all_projects = Project.query.all()
    # projects = []
    # for project in all_projects:
    #     projects.append(project)
    return render_template('index.html')

if __name__=="__main__":
    app.run()
