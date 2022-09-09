from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import generics, mixins
from rest_framework.decorators import api_view


class TodoView(viewsets.ModelViewSet, mixins.CreateModelMixin):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    
    
