from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EntrySerializer
from .models import Entry
# Create your views here.

class EntryView(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    queryset  = Entry.objects.all()