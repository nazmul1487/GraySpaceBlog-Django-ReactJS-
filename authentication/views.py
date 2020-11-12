from django.contrib.auth.views import LoginView, LogoutView
from .forms import LoginForm
from django.contrib.messages.views import SuccessMessageMixin


# LOGIN VIEW ENDPOINT
class UserLoginView(SuccessMessageMixin, LoginView):
    redirect_authenticated_user = True
    authentication_form = LoginForm
    template_name = 'login.html'
    success_message = "You have successfully logged in!!!"

