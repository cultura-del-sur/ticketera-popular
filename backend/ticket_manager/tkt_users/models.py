from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    # First and last name do not cover name patterns around the globe
    name = models.CharField(blank=True, max_length=255)
    first_name = None  # type: ignore[assignment]
    last_name = None  # type: ignore[assignment]