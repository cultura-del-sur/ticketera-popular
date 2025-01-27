from django.contrib import admin

from tkt_venues.models import Venue

@admin.register(Venue)
class VenueAdmin(admin.ModelAdmin):
    list_display = ("name", "address")
    search_fields = ("name", "address")