from django.conf.urls import url
from . import views

# Create Your URLs here

urlpatterns = [
  url(r'^$', views.home),
  url(r'^stripepayment$', views.stripePayment),
]
