from flask import Flask, render_template, request, make_response, flash
from markupsafe import escape
from random import random

app = Flask(__name__)
app.secret_key = b'some_secret_hihi'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/game')
def game():
    return render_template('game.html')


@app.route('/choix1')
def choix1():
    return render_template('choix1.html')


@app.route('/choix2')
def choix2():
    return render_template('choix2.html')


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
