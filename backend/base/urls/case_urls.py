from django.urls import  path
from base.views import case_views as views


urlpatterns = [
    path('add/', views.addClientDetails, name='cases-add'),
]