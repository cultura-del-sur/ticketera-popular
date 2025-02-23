from django.db import models

from shared.models import BaseModel


class Venue(BaseModel):
    """
    Describes a (culture) venue ("Espacio Cultural", "Teatro", "Sala", "Biblioteca", etc.)
    """

    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    latitude = models.FloatField(null=True, blank=True, default=None)
    longitude = models.FloatField(null=True, blank=True, default=None)

    def __str__(self):
        return self.name
