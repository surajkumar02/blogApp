from rest_framework import serializers
from django.contrib.auth.models import User
from .models import BlogModel


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["username",'email']


class BlogSerializer(serializers.ModelSerializer):
    username=serializers.CharField(source="user.username")
    class Meta:
        model=BlogModel
        fields="__all__"