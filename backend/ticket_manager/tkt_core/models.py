from django.db import models

from shared.models import BaseModel

class Tag(BaseModel):
    """
    Describes a tag for an event (e.g. "Música", "Teatro", "Cine", etc.)
    """

    name = models.CharField(max_length=100, primary_key=True)