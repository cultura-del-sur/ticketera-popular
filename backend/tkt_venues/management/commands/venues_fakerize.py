from argparse import OPTIONAL

from tkt_venues.factories import VenuesFactories
from shared.commands import BaseCommand


class Command(BaseCommand):
    help = "Creates fake events"

    def add_arguments(self, parser):
        parser.add_argument("method", nargs=OPTIONAL, type=str)
        parser.add_argument("quantity", nargs=OPTIONAL, type=int)

    def handle(self, *args, **options):
        methods = {
            "single": VenuesFactories.add_single,
        }

        if options["method"] is None:
            VenuesFactories.add_single()
        else:
            methods[options["method"]]()

        self.stdout_success()
