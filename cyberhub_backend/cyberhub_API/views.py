from rest_framework import generics, renderers
from cyberhub_API.models import Conference
from cyberhub_API.serializers import ConferenceSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse


#Endpoint for the API
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'conferences': reverse('conference-list', request=request, format=format)
    })


#List all conferences, or create a new conference
class ConferenceList(generics.ListCreateAPIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer

#Retrieve, update or delete a conference 
class ConferenceDetail(generics.RetrieveUpdateDestroyAPIView):
    #permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer