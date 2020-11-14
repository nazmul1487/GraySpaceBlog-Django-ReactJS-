from django.contrib.auth import get_user_model
from rest_framework import serializers
from authentication.models import User


class AuthenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email' ]


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            }
        }

    def create(self, validate_data):
        user = User.objects.create_user(
            first_name=validate_data['first_name'],
            last_name=validate_data['last_name'],
            email=validate_data['email'],
            password=validate_data['password'],
        )
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)
        if password:
            user.set_password(password)
            user.save()
        return user


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ['email', 'password']