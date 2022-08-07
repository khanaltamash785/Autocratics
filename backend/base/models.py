from django.db import models

from django.contrib.auth.models import User

# Create your models here.
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    link = models.URLField(null=True, blank=True)
    descriptions = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    createAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

def __str__(self):
    return self.descriptions
