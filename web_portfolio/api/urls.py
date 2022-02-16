from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from . import views

# router = routers.DefaultRouter()
# router.register(r'', views.MyApiViews)

urlpatterns = [
    # path("save/", views.savedata, name="savedata"),
    # path('', include(router.urls)),
    path('get/', views.MyApiViews.as_view()),
]
