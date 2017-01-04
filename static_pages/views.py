from django.shortcuts import render
from django.conf import settings
from .models import Project
from django.http import HttpResponse
from .forms import stripeAmount, contactForm
import stripe
# Create your views here.

def home(request):
    projects = Project.objects.all()
    form_donation = stripeAmount()
    form_contact = contactForm()
    return render(request, 'index.html',
        {
        'projects': projects,
        'form_donation': form_donation,
        'form_contact': form_contact,
        }
    )
    if request.method == 'POST':
        print(request.POST)
        if 'contact' in request.POST:
            print('CONTACT')
            form_contact = contactForm(data=request.POST)
            if form_contact.is_valid():
                print('Valid!')
                # TODO: add logic for sending mail & success message using the messages framework (https://docs.djangoproject.com/en/1.10/ref/contrib/messages/)
            else:
                print('Invalid!')
                # TODO: Add an invalid message using the messages framework (https://docs.djangoproject.com/en/1.10/ref/contrib/messages/)
def coffee(request):
    # Set your secret key: remember to change this to your live secret key in production
    # See your keys here: https://dashboard.stripe.com/account/apikeys
    stripe.api_key = settings.STRIPEAPI_TEST_PRIVATE_KEY
    # Get the credit card details submitted by the form
    token = request.POST['stripeToken']
    # Create a charge: this will charge the user's card
    donation_amount = int(request.POST['coffee_amount'])*200 # Each coffee is $2.00 
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
    return HttpResponse('cool')
    # TODO: Add an actual thank you page
