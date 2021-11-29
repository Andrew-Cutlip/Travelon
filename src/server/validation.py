import main as main
db = main.database


def validate_post(post: dict):
    user = post["user_id"]
    user_posts = db.get_user_posts(user)
    images = post.get("images")
    if images is not None:
        image_check = check_post_images(images, user_posts)
        if not image_check:
            return False

               
def check_post_images(images, user_posts):
    for image in images:
        for post in user_posts:
            img_id = post.get("img_id")
            if img_id is not None:
                if img_id == image:
                    return False
    return True