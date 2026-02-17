from django.contrib import admin

from tkt_events.models import Event, EventImage, EventTicketType, TicketType


class EventImageInline(admin.TabularInline):
    model = EventImage
    extra = 1


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "venue",
        "datetime",
        "is_featured",
    ]
    search_fields = [
        "name",
        "venue__name",
        "description",
    ]
    list_filter = [
        "venue",
        "datetime",
        "tags",
        "is_featured",
    ]
    list_editable = [
        "is_featured",
    ]
    inlines = [EventImageInline]


@admin.register(EventTicketType)
class EventTicketTypeAdmin(admin.ModelAdmin):
    list_display = [
        "event",
        "ticket_type",
        "price",
        "released_quantity",
    ]
    list_display_links = list_display
    search_fields = ["event__name", "ticket_type__name"]
    list_filter = ["event", "ticket_type", "price"]


@admin.register(TicketType)
class TicketTypeAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]
