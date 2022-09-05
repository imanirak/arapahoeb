from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=125)
    description = models.TextField(max_length=255)
    completed = models.BooleanField(default=False)