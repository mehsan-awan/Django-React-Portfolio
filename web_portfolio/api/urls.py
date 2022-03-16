from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'', views.MyApiViews, basename='Portfolio')

urlpatterns = [
    # path("save/", views.savedata, name="savedata"),
    # path("get/", views.get_view, name="get"),
    # path("put/<str:id>/", views.put_view, name="put"),
    path('<str:id>/', include(router.urls)),
]
