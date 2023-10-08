from .base import *

SECRET_KEY = "django-insecure-_i^%ncwk^-14$c%t_o_w*1#2dh)9)t@6i&f&^obwx5r2bwi-63"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "dbtest",
        "USER": "postgres",
        "PASSWORD": "docker",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
