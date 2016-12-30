from django.db import models

# Create your models here.

class Ada(models.Model):
    image = models.ImageField(upload_to='uploads/crow')
    github = models.CharField(max_length=500)
    twitter = models.CharField(max_length=500)
    def __str__(self):
        return "Ada"

class Project(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField(max_length=144)
    image = models.ImageField(upload_to='uploads/projects', blank=True, null=True)
    image_url = models.URLField()
    def __str__(self):
        return self.title
