import sys
from db import db
import src.server.app as app

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5000
    host = "0.0.0.0"
    app.app.run(host=host, port=port)
    mode = "production"
    if mode == "development":
        db = db.DBStub()
    else:
        db = db.RealDatabase()
