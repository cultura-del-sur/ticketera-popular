import datetime
import random
import factory
from djmoney.money import Money

from shared.services import random_item_from_qs
from tkt_venues.models import Venue
from tkt_events.models import Event, EventTicketType, TicketType

from .fake_data import culture_events, ticket_types


class EventFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Event

    name = factory.LazyFunction(lambda: random.choice(culture_events))
    description = factory.faker.Faker("text")
    venue = factory.LazyFunction(lambda: random_item_from_qs(Venue.objects.all()))
    datetime = factory.Faker("date_time_this_year", tzinfo=datetime.timezone.utc)
    is_featured = False


class TicketTypeFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = TicketType

    name = factory.LazyFunction(lambda: random.choice(ticket_types))
    slug = factory.LazyAttribute(lambda obj: obj.name.lower().replace(" ", "-"))


class EventTicketTypeFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = EventTicketType

    ticket_type = factory.Iterator(TicketType.objects.all())
    price = factory.LazyFunction(
        lambda: Money(random.randint(1000, 10000), "ARS"),
    )
    released_quantity = factory.Faker(
        "random_int",
        min=50,
        max=200,
    )


class EventsFactories:
    @staticmethod
    def add_single():
        return EventFactory.create()

    @staticmethod
    def add_ticket_types():
        for tt in ticket_types:
            TicketTypeFactory.create(name=tt)

    @staticmethod
    def add_event_with_ticket_types(ticket_quantity=5):
        event = EventFactory.create()
        for _ in range(ticket_quantity):
            EventTicketTypeFactory.create(event=event)
        return event
