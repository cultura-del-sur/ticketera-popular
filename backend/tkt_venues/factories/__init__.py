import random
import factory

from tkt_venues.models import Venue
from .fake_data import underground_venues

# list of underground venues in Buenos Aires with lat and long
buenos_aires_famous_locations = [
    {"name": "Plaza de Mayo", "latitude": -34.6037, "longitude": -58.3816},
    {"name": "Parque Lezama", "latitude": -34.5923, "longitude": -58.3790},
    {"name": "Parque Patricios", "latitude": -34.6042, "longitude": -58.3795},
    {"name": "Luna Park", "latitude": -34.6037, "longitude": -58.3816},
    #teatro opera
    {"name": "Teatro Colón", "latitude": -34.6050, "longitude": -58.3816},
    # teatro san martin 
    {"name": "Teatro San Martín", "latitude": -34.604657, "longitude": -58.3911553},
    # centro cultural raymundo gleyzer
    {"name": "Centro Cultural Raymundo Gleyzer", "latitude": -34.723672, "longitude": -58.2556382},
],

def buenos_aires_aprox_random_geolocation():
    return {
        "latitude": random.uniform(-34.723672, -34.5923),
        "longitude": random.uniform(-58.3816, -58.3790),
    }
    

class VenueFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Venue

    name = name = factory.LazyFunction(lambda: random.choice(underground_venues))
    address = factory.Faker("address", locale="es_AR")
    latitude = factory.Faker("latitude")
    longitude = factory.Faker("longitude")


class VenuesFactories:
    @staticmethod
    def add_single():
        # random_cc = random.choice(buenos_aires_famous_locations)
        random_cc = buenos_aires_aprox_random_geolocation()
        return VenueFactory.create(
            latitude=random_cc["latitude"],
            longitude=random_cc["longitude"],
        )
