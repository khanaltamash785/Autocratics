from django.urls import path
from base.views import notification_views as views


urlpatterns = [

    path('', views.getNotifications, name="notifications"),
]