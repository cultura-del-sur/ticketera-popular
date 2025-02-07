import random
from django.db import models


def random_item_from_qs[T_Model: models.Model](queryset: models.QuerySet[T_Model]) -> T_Model:
    return random.choice(queryset)
