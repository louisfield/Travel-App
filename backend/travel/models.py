from django.db import models

# Create your models here.

class Entry(models.Model):
    title = models.CharField(max_length=120)
    country = models.CharField(max_length=80)
    description = models.TextField()
    time = models.DateTimeField()
    complete = models.BooleanField(default=False)
    
    def _str_(self):
        return self.title