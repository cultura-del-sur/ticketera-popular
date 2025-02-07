import random
import factory

from tkt_venues.models import Venue
from .fake_data import underground_venues


class VenueFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Venue

    name = name = factory.LazyFunction(lambda: random.choice(underground_venues))
    address = factory.Faker("address", locale="es_AR")


class VenuesFactories:
    @staticmethod
    def add_single():
        return VenueFactory.create()
