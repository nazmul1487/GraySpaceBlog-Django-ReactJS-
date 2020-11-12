from django.urls import path
from authentication.views import UserLoginView, UserRegisterView


urlpatterns = [

    path('login/', UserLoginView.as_view(), name='login'),
    path('register/', UserRegisterView.as_view(), name='register'),
    # path('logout/', UserLogoutView.as_view(), name='logout'),

]
