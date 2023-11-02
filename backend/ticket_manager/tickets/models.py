from django.db import models
from shared.models import BaseModel


class Customer(BaseModel):
    """
    Describes a customer
    """

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    birth_date = models.DateField()
    phone_number = models.CharField(max_length=20)


class CultureVenue(BaseModel):
    """
    Describes a culture venue ("Espacio Cultural", "Teatro", "Sala", "Biblioteca", etc.)
    """

    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)


class Event(BaseModel):
    """
    Describes an event (e.g. "Concierto de la banda X", "Obra de teatro Y", etc.)
    """

    name = models.CharField(max_length=240)
    description = models.TextField()
    culture_venue = models.ForeignKey("CultureVenue", on_delete=models.CASCADE)
    datetime = models.DateTimeField()
    tags = models.ManyToManyField("Tag")


class Tag(BaseModel):
    """
    Describes a tag for an event (e.g. "Música", "Teatro", "Cine", etc.)
    """

    name = models.CharField(max_length=100, primary_key=True)
    campo = models.CharField(max_length=20, null=True)


class Ticket(BaseModel):
    """
    Describes a ticket for an event
    """

    event = models.ForeignKey("Event", on_delete=models.CASCADE)
    event_ticket_type = models.ForeignKey("EventTicketType", on_delete=models.CASCADE)
    token = models.CharField(max_length=240, unique=True)
    customer = models.ForeignKey("Customer", default=None, on_delete=models.CASCADE)
    marked = models.BooleanField(default=False)


class TicketType(BaseModel):
    """
    Describes a type of ticket (e.g. "Entrada general", "Entrada VIP", etc.)
    """

    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)


class EventTicketType(BaseModel):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    ticket_type = models.ForeignKey("TicketType", on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    released_quantity = models.IntegerField(default=1)

    class Meta:
        # UniqueConstraint between ticket_type and event
        # (see https://docs.djangoproject.com/en/4.2/ref/models/constraints/#uniqueconstraint)
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "event",
                    "ticket_type",
                ],
                name="unique_event_ticket_type",
            )
        ]
