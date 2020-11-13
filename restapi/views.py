from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import CreateAPIView
from .serializers import UserRegistrationSerializer, AuthenticationSerializer
from rest_framework.response import Response
from authentication.models import User


class AuthenticationAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = AuthenticationSerializer


# REGISTER A NEW USER
class RegistrationAPIView(CreateAPIView):
    serializer_class = UserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": AuthenticationSerializer(user, context=self.get_serializer_context()).data,
            "message": "User is Created Successfully.",
        })