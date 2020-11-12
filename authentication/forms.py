from django.contrib.auth.forms import AuthenticationForm
from django import forms
from django.forms import TextInput, PasswordInput
from django.core.exceptions import ValidationError
from authentication.models import User


class LoginForm(AuthenticationForm):
    username = forms.EmailField(widget=TextInput(attrs={
        'class': 'form-control',
        'id': 'email',
    }), required=True)
    password = forms.CharField(widget=PasswordInput(attrs={
        'class': 'form-control'
    }), required=True)


