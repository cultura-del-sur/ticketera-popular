from django.contrib import admin

from tkt_tickets.models import (
    Customer,
    Ticket,
)

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email")
    search_fields = ("first_name", "last_name", "email")


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ("event", "event_ticket_type", "customer", "marked")
    search_fields = ("event__name", "customer__first_name", "customer__last_name")
    list_filter = ("event", "event_ticket_type", "customer", "marked")

