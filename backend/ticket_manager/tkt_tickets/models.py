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


class Ticket(BaseModel):
    """
    Describes a ticket for an event
    """

    event = models.ForeignKey("tkt_events.Event", on_delete=models.CASCADE)
    event_ticket_type = models.ForeignKey(
        "tkt_events.EventTicketType", on_delete=models.CASCADE
    )
    token = models.CharField(max_length=240, unique=True)
    customer = models.ForeignKey("Customer", default=None, on_delete=models.CASCADE)
    marked = models.BooleanField(default=False)
