from django.urls import path
from cyberhub_API import views

#API Endpoints
urlpatterns = [
    path('', views.api_root),
    path('conferences/', views.ConferenceList.as_view()),
    path('conferences/<int:pk>/', views.ConferenceDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>', views.UserDetail.as_view())
]

