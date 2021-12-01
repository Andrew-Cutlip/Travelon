import main as main


def validate_post(post: dict):
    user = post["user_id"]
    user_posts = main.database.get_user_posts(user)
    images = post.get("images")
    if images is not None:
        image_check = check_post_images(images, user_posts)
        if not image_check:
            return False
    ratings = post.get("ratings")
    if ratings is not None:
        ratings_check = check_post_ratings(ratings, user_posts)
        if not ratings_check:
            return False
    return True


def check_post_images(images, user_posts):
    for image in images:
        for post in user_posts:
            img_ids = post.get("img_ids")
            if img_ids is not None:
                for img_id in img_ids:
                    if img_id == image:
                        return False
    return True


def check_post_ratings(ratings, user_posts):
    for rating in ratings:
        for post in user_posts:
            rating_ids = post.get("rating_ids")
            if rating_ids is not None:
                for rating_id in  rating_ids:
                    if rating_id == rating:
                        return False
    return True
