from rest_framework import serializers

class ChatSerializer(serializers.Serializer):
    user_input = serializers.CharField()


class Knowledge_BaseSerializer(serializers.Serializer):
    QNS = serializers.CharField()