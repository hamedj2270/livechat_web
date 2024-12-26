from django.urls import path
from .views import ChatMessageAPIView

urlpatterns = [
    path('send-message/', ChatMessageAPIView.as_view(), name='send_message'),
]
