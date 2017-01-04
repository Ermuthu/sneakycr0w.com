from django.shortcuts import render
from django.conf import settings
from .models import Project
from django.http import HttpResponse
from .forms import stripeAmount
import stripe
# Create your views here.

def home(request):
    projects = Project.objects.all()
    stripe_public_key = settings.STRIPEAPI_TEST_PUBLIC_KEY
    form_class = stripeAmount
    return render(request, 'index.html', {'projects':projects, 'stripe_public_key':stripe_public_key, 'form':form_class})

def stripePayment(request):
    # Set your secret key: remember to change this to your live secret key in production
    # See your keys here: https://dashboard.stripe.com/account/apikeys
    stripe.api_key = settings.STRIPEAPI_TEST_PRIVATE_KEY
    # Get the credit card details submitted by the form
    token = request.POST['stripeToken']
    # Create a charge: this will charge the user's card
    donation_amount = int(request.POST['custom_amount']) * 200 # Coffee's are $2 each :)
    try:
      charge = stripe.Charge.create(
          amount=donation_amount, # Amount in cents
          currency="usd",
          source=token,
          description="Example charge"
      )
    except stripe.error.CardError as e:
      # The card has been declined
      pass
    return HttpResponse('waffles')
