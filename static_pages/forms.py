from django import forms
from captcha.fields import ReCaptchaField
class stripeAmount(forms.Form):
    coffee_amount = forms.IntegerField(min_value=0,widget=forms.NumberInput)
    # TODO: Add field to let users set a custom amount in USD (as oppose to in coffees)

class contactForm(forms.Form):
    name = forms.CharField(max_length=50)
    email = forms.EmailField(max_length=20)
    message = forms.CharField(widget=forms.Textarea)
    captcha = ReCaptchaField()
