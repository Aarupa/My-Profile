from django.urls import path
from .views import IndexAPIView, ChatAPIView
from . import views

urlpatterns = [
    path("", IndexAPIView.as_view(), name="index"),
    path("Chat/", ChatAPIView.as_view(), name="Chat"),
]