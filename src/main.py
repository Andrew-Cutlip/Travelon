import sys

from flask import Flask

app = Flask(__name__)



@app.route("/")
def hello_world():
    return "<p>Hello  World</p>"


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5000
    host = "0.0.0.0"
    app.run(host=host, port=port)
    print(f"Running flask on {host}:port\n")
