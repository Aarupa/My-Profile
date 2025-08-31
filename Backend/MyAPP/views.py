from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .chatbot_assistent import chat
from .MyInfoKB import Knowledge_Base
from . import views
from .serializers import ChatSerializer, Knowledge_BaseSerializer

# Create your views here.
class IndexAPIView(APIView):
    def get(self, request):
        return render(request, 'MyAPP/home.html', {"message" : "Hello, world. You're at the FrontendAPP index."})

class ChatAPIView(APIView):
    def post(self, request):
        serializer = ChatSerializer(data = request.data)
        if serializer.is_valid():
            user_input = serializer.validated_data['user_input']
            result = chat(user_input)
            return Response({'result': result}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class Knowledge_BaseAPIView(APIView):
    def post(self, request):
        serializer = Knowledge_BaseSerializer(data = request.data)
        if serializer.is_valid():
            QNS = serializer.validated_data['QNS']
            result = Knowledge_Base(QNS)
            return Response({'result': result}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
