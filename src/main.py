import sys
from db import db
from server.app import app

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5000
    host = "0.0.0.0"
    app.run(host=host, port=port)
    db = db.Database()
