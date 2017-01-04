from django import forms

class stripeAmount(forms.Form):
    custom_amount = forms.IntegerField(min_value=0)
