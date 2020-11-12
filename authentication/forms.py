from django.contrib.auth.forms import AuthenticationForm
from django import forms
from django.forms import TextInput, PasswordInput
from django.core.exceptions import ValidationError
from authentication.models import User
import re


class LoginForm(AuthenticationForm):
    username = forms.EmailField(widget=TextInput(attrs={
        'class': 'form-control',
        'id': 'email',
    }), required=True)
    password = forms.CharField(widget=PasswordInput(attrs={
        'class': 'form-control'
    }), required=True)


class RegisterForm(forms.ModelForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={
                'class': 'form-control'}), required=True)
    last_name = forms.CharField(widget=forms.TextInput(attrs={
                'class': 'form-control'}), required=True)
    email = forms.CharField(widget=forms.EmailInput(attrs={
                'class': 'form-control'}), required=True)
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={
                'class': 'form-control'}), required=True)
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
                'class': 'form-control'}), required=True)

    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'password1',
            'password2'
        ]

    def clean_password2(self):
        password1 = self.cleaned_data['password1']
        password2 = self.cleaned_data['password2']

        if password2 and password1 and password2 != password1:
            raise ValidationError("Password doesn't match.")
        return password2

    def clean_email(self):
        regex = '^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
        email = self.cleaned_data['email']
        r = User.objects.filter(email=email)
        if r.count() or (email and not re.search(regex, email)):
            raise ValidationError("Your email used or incorrect.")
        return email

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user
