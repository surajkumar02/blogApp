from django.urls import path
from .views import Blog,Blogs
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    
    path('blog/<int:pk>/',Blog.as_view()),
    path('blogs/',Blogs.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]