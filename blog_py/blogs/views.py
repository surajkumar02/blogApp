from django.http import response
from .serializers import BlogSerializer, UserSerializer
from .models import BlogModel
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView,Response
from rest_framework.generics import CreateAPIView, DestroyAPIView, GenericAPIView, UpdateAPIView
from rest_framework.mixins import ListModelMixin,RetrieveModelMixin


# Create your views here.

class Blog(RetrieveModelMixin,UpdateAPIView,DestroyAPIView,GenericAPIView):

    permission_classes=[IsAuthenticated]
    
    queryset=BlogModel.objects.all()
    serializer_class=BlogSerializer

    def get(self,request):
        user=request.data['user']

        blog=BlogModel.objects.filter(user=user)
        result=[]
        for i in blog:
            print(i)
            result.append({'blog_id':i.blog_id,'blog':i.blog})
        

        return Response(data=result)

    def put(self,request,*args,**kwargs):
        return self.update(request,*args,**kwargs)
    
    def delete(self,request,*args,**kwargs):
        return self.delete(request,*args,**kwargs)



class Blogs(ListModelMixin,CreateAPIView,GenericAPIView):
    permission_classes=[IsAuthenticated]
    
    queryset=BlogModel.objects.all()
    serializer_class=BlogSerializer

    def get(self,request,*args,**kwargs):
        return self.list(request,*args,*kwargs)

    def post(self,request,*args,**kwargs):
        return self.create(request,*args,*kwargs)


class signup(APIView):
    
    def post(self,request):
        username=request.data["username"]
        password=request.data['password']
        email=request.data['email']

        useravail=UserSerializer(data={**request.data})

        if useravail.is_valid():
            user=User.objects.create(username=username,email=email)
            user.set_password(password)
            user.save()


        # newuser=User.objects.last()
            token=RefreshToken.for_user(user)
            return Response(data={"username":user.username,
            "email":user.email,
            "refresh":str(token),
            "access":str(token.access_token)})

        return Response("User already Exists")

class login(APIView):
    def post(self,request):
        
        if request.data:
        
            try:
                user=request.data['username']
                password=request.data['password']
                useravail=User.objects.get(username=user)
                if useravail.check_password(password):   
                    token=RefreshToken.for_user(useravail)
                    return Response(data={"user":useravail.id,"username":useravail.username, "refresh":str(token),
                    "access":str(token.access_token)
                    })
                return Response("Incorrect Password")    
            except:
                return Response("Incompleted format")
        
        return Response("Enter Valid Credentials")