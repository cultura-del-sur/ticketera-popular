from rest_framework import serializers, viewsets
from .models import Event, EventTicketType


class EventTicketTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTicketType
        fields = ['ticket_type', 'price', 'released_quantity']


class EventSerializer(serializers.ModelSerializer):
    tickets = EventTicketTypeSerializer(source='eventtickettype_set', many=True, read_only=True)
    venue_name = serializers.CharField(source='venue.name', read_only=True)
    
    class Meta:
        model = Event
        fields = ['id', 'name', 'description', 'datetime', 'venue_name', 'tickets']


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset for viewing events.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer