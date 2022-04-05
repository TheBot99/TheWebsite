from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("Home.html")


@app.route("/game")
def game():
    return render_template("Game.html")


@app.route("/emulator")
def emulator():
    return render_template("Emulator.html")

@app.route("/gameroom")
def gameroom():
    return render_template("GameRoom.html")


@app.route("/about")
def about():
    return render_template("About.html")

@app.route("/5925106337393963343663419705987675552292498853415480862632764751972231317254813826047454807747214581")
def abortmissionselfdestruct():
    os._exit(0)


if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
