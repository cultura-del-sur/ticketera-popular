from django.contrib import admin

from tkt_events.models import Event, EventTicketType, TicketType


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "venue",
        "datetime",
    )
    search_fields = (
        "name",
        "venue__name",
        "description",
    )
    list_filter = (
        "venue",
        "datetime",
        "tags",
    )

@admin.register(EventTicketType)
class EventTicketTypeAdmin(admin.ModelAdmin):
    list_display = ("event", "ticket_type", "price")
    search_fields = ("event__name", "ticket_type__name")
    list_filter = ("event", "ticket_type", "price")

@admin.register(TicketType)
class TicketTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)