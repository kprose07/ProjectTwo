from flask import Flask, render_template

# for SQL database intergration using sqlalchemy
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)


@app.route('/')
@app.route('/home')
def home_page():
    return render_template('index.html', subtitle='Home Page', text='This is the home page')

# to create more pages we basically define a url route and then define the function for that
#


if __name__ == '__main__':
    app.run(debug=True)
