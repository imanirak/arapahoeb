from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todos'),
# # router.register(r'todos/<str:pk>', views.getTodo)

urlpatterns = [
    path('', include(router.urls)),


]
