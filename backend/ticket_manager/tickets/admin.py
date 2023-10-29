from django.contrib import admin

from tickets.models import (
    Customer,
    CultureVenue,
    Event,
    Tag,
    Ticket,
    TicketType,
    EventTicketType,
)


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email")
    search_fields = ("first_name", "last_name", "email")


@admin.register(CultureVenue)
class CultureVenueAdmin(admin.ModelAdmin):
    list_display = ("name", "address")
    search_fields = ("name", "address")


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "culture_venue",
        "datetime",
    )
    search_fields = (
        "name",
        "culture_venue__name",
        "description",
    )
    list_filter = (
        "culture_venue",
        "datetime",
        "tags",
    )


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ("event", "event_ticket_type", "customer", "marked")
    search_fields = ("event__name", "customer__first_name", "customer__last_name")
    list_filter = ("event", "event_ticket_type", "customer", "marked")


@admin.register(TicketType)
class TicketTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(EventTicketType)
class EventTicketTypeAdmin(admin.ModelAdmin):
    list_display = ("event", "ticket_type", "price")
    search_fields = ("event__name", "ticket_type__name")
    list_filter = ("event", "ticket_type", "price")
