from django.contrib.auth.views import LoginView, LogoutView
from .forms import LoginForm, RegisterForm
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.contrib import messages

# LOGIN VIEW ENDPOINT
class UserLoginView(SuccessMessageMixin, LoginView):
    redirect_authenticated_user = True
    authentication_form = LoginForm
    template_name = 'login.html'
    success_message = "You have successfully logged in!!!"


# REGISTER VIEW ENDPOINT
class UserRegisterView(SuccessMessageMixin, CreateView):
    form_class = RegisterForm
    success_url = reverse_lazy('login')
    template_name = 'register.html'
    success_message = "You have registered successfully!!!"


# LOGOUT VIEW ENDPOINT
class UserLogoutView(LogoutView):
    template_name = 'logout.html'
    next_page = '/'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            messages.add_message(request, messages.ERROR, 'Successfully logged out.')
        response = super().dispatch(request, *args, **kwargs)
        return response
