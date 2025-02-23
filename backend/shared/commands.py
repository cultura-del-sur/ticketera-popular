from django.core.management import BaseCommand as DjangoBaseCommand


class BaseCommand(DjangoBaseCommand):
    def stdout_success(self):
        self.stdout.write(self.style.SUCCESS("Success!"))
