
# host at http://127.0.0.1:5000/static/1.wav
import webbrowser
from flask import Flask
 
app = Flask(__name__)
 
if __name__ == "__main__":
    webbrowser.open("http://127.0.0.1:5000")
    app.run()
