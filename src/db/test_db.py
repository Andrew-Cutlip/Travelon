import unittest
import db


class MyTestCase(unittest.TestCase):
    def test_cites(self):
        database = db.DBStub()
        database.add_city("Buffalo")
        cities = database.get_cities()
        self.assertTrue("Buffalo" in cities)

    def test_users(self):
        database = db.DBStub()
        available = database.is_username_available("Bob")
        self.assertTrue(available)
        psw = "123"
        database.insert_user(0, "Bob", psw)
        user = database.get_user("Bob")
        self.assertTrue(user["username"] == "Bob")
        now_available = database.is_username_available("Bob")
        self.assertTrue(not now_available)

    def test_restaurant(self):
        database = db.RealDatabase()
        db.RealDatabase.insert_user(database, {"field": "value"})


if __name__ == '__main__':
    unittest.main()
