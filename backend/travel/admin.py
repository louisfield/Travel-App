from django.contrib import admin
from .models import Entry
# Register your models here.
class EntryAdmin(admin.ModelAdmin):
    list_display = ('title' , 'country', 'description', 'time', 'complete')
    
admin.site.register(Entry,EntryAdmin)