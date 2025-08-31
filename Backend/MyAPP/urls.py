from django.urls import path
from .views import IndexAPIView, ChatAPIView, Knowledge_baseAPIView
from . import views

urlpatterns = [
    path("", IndexAPIView.as_view(), name="index"),
    path("Chat/", ChatAPIView.as_view(), name="Chat"),
    path("MyInfo/", Knowledge_baseAPIView.as_view(), name="My_info")
]