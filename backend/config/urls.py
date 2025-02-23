from django.contrib import admin
from django.urls import include, path

from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView


from tkt_events.urls import router as tkt_events_router

admin.site.site_header = "Ticketera Popular Admin"


router = routers.DefaultRouter()

router.registry.extend(tkt_events_router.registry)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include((router.urls, "api"))),
]
