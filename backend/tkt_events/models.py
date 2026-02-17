from django.db import models
from djmoney.models.fields import MoneyField
from shared.models import BaseModel


# Create your models here.
class Event(BaseModel):
    """
    Describes an event (e.g. "Concierto de la banda X", "Obra de teatro Y", etc.)
    """

    name = models.CharField(max_length=240)
    description = models.TextField(blank=True)
    venue = models.ForeignKey("tkt_venues.Venue", on_delete=models.CASCADE)
    datetime = models.DateTimeField()
    tags = models.ManyToManyField("tkt_core.Tag", blank=True)
    is_featured = models.BooleanField(default=False)

    @property
    def featured_image(self):
        first = self.images.first()
        return first.image if first else None

    def __str__(self):
        return f"{self.venue} - {self.name} ({self.datetime.strftime('%d/%m/%Y, %H:%M')})"


class EventTicketType(BaseModel):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    ticket_type = models.ForeignKey("tkt_events.TicketType", on_delete=models.CASCADE)
    price = MoneyField(
        max_digits=10,
        decimal_places=2,
        default_currency="ARS",  # type:ignore
    )
    released_quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.event} {self.ticket_type}"

    class Meta(BaseModel.Meta):
        # UniqueConstraint between ticket_type and event
        # (see https://docs.djangoproject.com/en/5.1/ref/models/constraints/#uniqueconstraint)
        constraints = [
            models.UniqueConstraint(
                fields=[
                    "event",
                    "ticket_type",
                ],
                name="unique_event_ticket_type",
            )
        ]


class EventImage(BaseModel):
    """
    An image associated with an event.
    """

    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="events/")
    order = models.PositiveIntegerField(default=0)

    class Meta(BaseModel.Meta):
        ordering = ["order", "created_at"]

    def __str__(self):
        return f"{self.event.name} - image {self.order}"


class TicketType(BaseModel):
    """
    Describes a type of ticket (e.g. "Entrada general", "Entrada VIP", etc.)
    """

    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, primary_key=True)

    def __str__(self):
        return self.slug
