from argparse import OPTIONAL

from tkt_events.factories import EventsFactories
from shared.commands import BaseCommand


class Command(BaseCommand):
    help = "Creates fake events"

    def add_arguments(self, parser):
        parser.add_argument("method", nargs=OPTIONAL, type=str)
        parser.add_argument("quantity", nargs=OPTIONAL, type=int)

    def handle(self, *args, **options):
        methods = {
            "single": EventsFactories.add_single,
            "complete": EventsFactories.add_event_with_ticket_types,
            "ticket_types": EventsFactories.add_ticket_types,
        }

        if options["method"] is None:
            EventsFactories.add_single()
        else:
            methods[options["method"]]()

        self.stdout_success()
