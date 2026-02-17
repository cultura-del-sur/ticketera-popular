from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Event, EventImage, EventTicketType
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


class EventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventImage
        fields = ["id", "image"]


class EventSerializer(serializers.ModelSerializer):
    tickets = EventTicketTypeSerializer(source="eventtickettype_set", many=True, read_only=True)
    venue = EventVenueSerializer(read_only=True)
    images = EventImageSerializer(many=True, read_only=True)

    featured_image = serializers.ImageField(read_only=True)

    class Meta:
        model = Event
        fields = [
            "id",
            "name",
            "description",
            "datetime",
            "venue",
            "featured_image",
            "images",
            "tickets",
            "tags",
        ]


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
