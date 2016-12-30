from django.shortcuts import render
from .models import Ada, Project
# Create your views here.

def home(request):
    ada = Ada.objects.all()
    projects = Project.objects.all()
    return render(request, 'index.html', {'ada':ada, 'projects':projects})
