from rest_framework import routers


from .rest import EventViewSet

router = routers.DefaultRouter()
router.register(r"events", EventViewSet, basename="event")

