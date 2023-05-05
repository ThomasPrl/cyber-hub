from rest_framework import serializers
from cyberhub_API.models import Conference
from django.contrib.auth.models import User

class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = ['id', 'title', 'localisation', 'description', 'publish_deadline', 'date'] 
        
    
class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username']