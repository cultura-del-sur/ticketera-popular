import random

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from tkt_events.selectors import event_list_featured


class EventFeaturedListApi(APIView):
    class OutputSerializer(serializers.Serializer):
        id = serializers.IntegerField()
        name = serializers.CharField()
        description = serializers.CharField()
        datetime = serializers.DateTimeField()
        image = serializers.SerializerMethodField()
        venue = serializers.SerializerMethodField()
        tickets = serializers.SerializerMethodField()
        tags = serializers.SerializerMethodField()

        def get_image(self, obj):
            images = [
                "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
                "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b",
            ]
            return random.choice(images)

        def get_venue(self, obj):
            return {
                "id": obj.venue.id,
                "name": obj.venue.name,
                "location": {
                    "latitude": obj.venue.latitude,
                    "longitude": obj.venue.longitude,
                },
            }

        def get_tickets(self, obj):
            return [
                {
                    "type_label": ett.ticket_type.name,
                    "type_slug": ett.ticket_type.slug,
                    "price": str(ett.price.amount),
                    "available_tickets": ett.released_quantity,
                }
                for ett in obj.eventtickettype_set.all()
            ]

        def get_tags(self, obj):
            return list(obj.tags.values_list("name", flat=True))

    def get(self, request):
        events = event_list_featured()
        serializer = self.OutputSerializer(events, many=True)
        return Response(serializer.data)
