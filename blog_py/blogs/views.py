from .serializers import BlogSerializer
from .models import BlogModel
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView,Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin,RetrieveModelMixin


# Create your views here.

class Blog(RetrieveModelMixin,GenericAPIView):

    permission_classes=[IsAuthenticated]

    queryset=BlogModel.objects.all()
    serializer_class=BlogSerializer

    def get(self,request,*args,**kwargs):
        return self.retrieve(request,*args,**kwargs)



class Blogs(ListModelMixin,GenericAPIView):
    
    queryset=BlogModel.objects.all()
    serializer_class=BlogSerializer

    def get(self,request,*args,**kwargs):
        return self.list(request,*args,*kwargs)