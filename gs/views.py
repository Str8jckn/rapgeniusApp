from django.shortcuts import render
from django.http import HttpResponse        # from the django.http module import the HttpResponse class
from django.views.generic.base import TemplateView
from django.shortcuts import redirect


class HomeView(TemplateView):
    template_name = "nu.html"
    

class VoteView(TemplateView):
    template_name = "vote.html"

class YView(TemplateView):
    template_name = "Y.html"

class LeadrView(TemplateView):
    template_name = "Leadr.html"


  
   

# Create your views here.
# def view_function(request):
#     html = "<h1>Hello, World!</h1>"
#     return HttpResponse(html)
