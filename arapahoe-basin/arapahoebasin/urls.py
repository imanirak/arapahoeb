from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('api/', include(router.urls)),
]
