import random

from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Event, EventTicketType
from .services import event_list_featured
from tkt_venues.models import Venue


class EventTicketTypeSerializer(serializers.ModelSerializer):
    type_label = serializers.CharField(source="ticket_type.name", read_only=True)
    type_slug = serializers.CharField(source="ticket_type.slug", read_only=True)
    available_tickets = serializers.IntegerField(source="released_quantity", read_only=True)

    class Meta:
        model = EventTicketType
        fields = [
            "type_label",
            "type_slug",
            "price",
            "available_tickets",
        ]


class EventVenueSerializer(serializers.ModelSerializer):
    location = serializers.SerializerMethodField()

    class Meta:
        model = Venue
        fields = ["id", "name", "location"]

    def get_location(self, obj):
        return {
            "latitude": obj.latitude,
            "longitude": obj.longitude,
        }


class EventSerializer(serializers.ModelSerializer):
    tickets = EventTicketTypeSerializer(source="eventtickettype_set", many=True, read_only=True)
    venue = EventVenueSerializer(read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = [
            "id",
            "name",
            "description",
            "datetime",
            "venue",
            "image",
            "tickets",
            "tags",
        ]

    def get_image(self, obj):
        images = [
            "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
            "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b",
        ]
        return random.choice(images)


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    A viewset for viewing events.
    """

    queryset = Event.objects.all()
    serializer_class = EventSerializer

    @action(detail=False, methods=["get"], url_path="featured")
    def featured(self, request):
        events = event_list_featured()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
