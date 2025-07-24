from django.urls import path
from .views import IndexAPIView
from . import views

urlpatterns = [
    path("", IndexAPIView.as_view(), name="index"),
]