from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ChatMessage
from .serializers import ChatMessageSerializer
from .utils import send_telegram_message


class ChatMessageAPIView(APIView):
    def post(self, request):
        serializer = ChatMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # اینجا می‌توانید پیام را به تلگرام ارسال کنید
            message = f"دسته‌بندی: {serializer.validated_data['category']}\nپیام: {serializer.validated_data['message']}"
            send_telegram_message(message)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
