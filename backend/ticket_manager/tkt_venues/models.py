from django.db import models

from shared.models import BaseModel

class Venue(BaseModel):
    """
    Describes a (culture) venue ("Espacio Cultural", "Teatro", "Sala", "Biblioteca", etc.)
    """

    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.name