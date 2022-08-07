from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializers import NotificationSerializer
from base.models import Notification


from django.contrib.auth.hashers import make_password
from rest_framework import status

@api_view(['GET'])
def getNotifications(request):
    notifications = Notification.objects.all()
    serializer = NotificationSerializer(notifications, many=True)
    return Response(serializer.data)
