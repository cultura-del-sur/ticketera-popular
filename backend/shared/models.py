from django.db import models

# class BaseModelManager(models.Manager):
#     def get_queryset(self):
#         return super().get_queryset().filter(deleted=False)


class BaseModel(models.Model):
    """
    Base model for all models in the project.
    """

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # is_deleted = models.BooleanField(default=False)

    # objects = BaseModelManager()

    class Meta:
        abstract = True

    # def delete(self):
    #     self.is_deleted = True
    #     self.save()
