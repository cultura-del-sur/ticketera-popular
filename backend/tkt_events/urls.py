from django.urls import path
from rest_framework import routers

from .apis import EventFeaturedListApi
from .rest import EventViewSet

router = routers.DefaultRouter()
router.register(r"events", EventViewSet, basename="event")

urlpatterns = [
    path("events/featured/", EventFeaturedListApi.as_view(), name="event-featured-list"),
]
