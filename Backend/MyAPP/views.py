from django.shortcuts import render
from rest_framework.views import APIView
from . import views

# Create your views here.
class IndexAPIView(APIView):
    def get(self, request):
        return render(request, 'MyAPP/home.html', {"message" : "Hello, world. You're at the FrontendAPP index."})
