from django.db.models import QuerySet

from tkt_events.models import Event


def event_list_featured() -> QuerySet[Event]:
    return Event.objects.filter(is_featured=True).order_by("datetime")
