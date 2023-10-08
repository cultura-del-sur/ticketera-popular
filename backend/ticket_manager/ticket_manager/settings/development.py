from .base import *

SECRET_KEY = "django-insecure-_i^%ncwk^-14$c%t_o_w*1#2dh)9)t@6i&f&^obwx5r2bwi-63"
DEBUG = True

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "postgres",
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}
