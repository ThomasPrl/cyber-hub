from django.db import models

class Conference(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    localisation = models.CharField(max_length=100, blank=True, default='')
    description = models.CharField(max_length=1000, blank=True, default='')
    publish_deadline = models.DateField(blank=True)
    date = models.DateField(blank=True)

    class Meta:
        ordering = ['publish_deadline']
        

# class Certification(models.Model):
    