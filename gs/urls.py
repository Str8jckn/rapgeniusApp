from django.urls import path

from .views import HomeView, YView, VoteView, LeadrView
import requests
from django.conf import settings
from django.conf.urls.static import static
#BASE_URL = "https://api.genius.com"
#CLIENT_ACCESS_TOKEN = "0U9LpNSyxi5S9NwNlEqAx3lTIvEo8h_eNmho5ekSVTFEbOFl7Dm9TfoyiDm85gtK"
#ARTIST_NAME = ""

#def _get(path, params=None, headers=None):

    #requrl = '/'.join([BASE_URL, path])
    #token = "Bearer {vggsVIE2BkaIO8iMaukk0gfjH1aqgMiEItJE2Lbig14_vH36ZIQk74nnUD2jyTCF}".format(CLIENT_ACCESS_TOKEN)
    #if headers:
     #   headers['Authorization'] = token
    #else:
    #    headers = {"Authorization": token}

    #response = requests.get(url=requrl, params=params, headers=headers)
    #response.raise_for_status()

    #return response.json()

#def find_id():
#    find_id = _get("search", {'q': ARTIST_NAME})
#for hit in find_id["response"]["hits"]:
#   if hit["result"]["primary_artist"]["name"] == ARTIST_NAME:
#       artist_id = hit["result"]["primary_artist"]["id"]
#       break

#print("-> " + ARTIST_NAME + "'s id is " + str(artist_id) + "\n")


urlpatterns=[
     
    path('', HomeView.as_view(), name="nu"),
    path('vote/', VoteView.as_view(), name="vote"),
    path('yyy/', YView.as_view(), name="Y"),
    path('leadr/', LeadrView.as_view(), name="Leadr"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


