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

    def test_friends(self):
        database = db.DBStub()
        available = database.is_username_available("Bob")
        self.assertTrue(available)
        psw = "123"
        database.insert_user(0, "Bob", psw)
        user = database.get_user("Bob")
        self.assertTrue(user["username"] == "Bob")
        now_available = database.is_username_available("Bob")
        self.assertTrue(not now_available)

        available2 = database.is_username_available("Charles")
        self.assertTrue(available2)
        psw2 = "123"
        database.insert_user(0, "Charles", psw2)
        user2 = database.get_user("Charles")
        self.assertTrue(user2["username"] == "Charles")
        now_available2 = database.is_username_available("Charles")
        self.assertTrue(not now_available2)

        friend = "Charles"
        database.add_friend("Bob",friend)


if __name__ == '__main__':
    unittest.main()
