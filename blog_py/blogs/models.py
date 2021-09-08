from django.db import models
from django.contrib.auth.models import User

# Create your models here

class BlogModel(models.Model):
    blog_id=models.AutoField(primary_key=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    blog=models.TextField(max_length=600)
    like=models.BooleanField(default=False)

    


