from django.shortcuts import render
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_mongoengine import viewsets

from .models import Portfolio
from .serializer import PortfolioSerializer
from django.http import JsonResponse


# Create your views here.


# Class Based Views

class MyApiViews(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    def get(self, request, id):
        queryset = Portfolio.objects.all()

        serializer = PortfolioSerializer(queryset, many=True)
        return Response(serializer.data)

    def put(self, request, id, *args, **kwargs):
        portfolio_data = JSONParser().parse(request)
        queryset = Portfolio.objects.get(id=id)
        portfolio_serializer = PortfolioSerializer(queryset, data=portfolio_data, partial=True)
        try:
            if portfolio_serializer.is_valid(raise_exception=True):
                portfolio_serializer.save()
                return JsonResponse(portfolio_serializer.data)
        except Exception as e:
            print("EXCEPTION: ", e)
        return JsonResponse(portfolio_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Save Data for 1st time
"""
def savedata(request):
    # nested_doc = MyNestedDoc(
    #     value1=["dsd", "dd"],
    #     value2={
    #         "blah1": "blahvalue1",
    #         "blah2": "blahvalue2"
    #     }
    # )
    doc = Portfolio(name="Ehsan",
                    summary="Started as an electrical engineer but my passion for development made me switch field.",
                    profession="SOFTWARE DEVELOPER ",
                    quote="If you can dream it, you can do it",
                    email="354721ehsan@gmail.com",
                    address="Rawalpindi",
                    interests=["Web Development", "Cyber Security", "Data Science", "Web Scrapping/Crawling"],
                    accounts={"github": "https://github.com/mehsan-awan",
                              "linkedin": "https://www.linkedin.com/in/muhammad-ehsan-ul-haq-96b4b3154"
                              },
                    managementExperience={
                        "1": {
                            "role": "Developer",
                            "duration": "01/11/2020-Present",
                        },
                        "2": {
                            "role": "Internship",
                            "duration": "25/08/2020-31/10/2020"
                        },
                    },
                    courses=["object Oriented Programming", "Data Structures and Algorithm",
                             "Advance Cryptography", "Network Security", "Computer Security"],
                    certifications={
                        "1": {
                            "title": "Python3 Programming Specialization",
                            "year": "2020",
                            "organization": "UNiVERSiTY OF MiCiHiGAN ‑ COURSERA",
                            "topics": ["Python Basics", "Data Structures", "Data Collection and Processing",
                                       "Classes and Inheritance", "Pillow, Tesseract, Opencv"]
                        },
                        "2": {
                            "title": "Applied Cryptography Specialization",
                            "year": "2020",
                            "organization": "UNiVERSiTY OF COLORADO ‑ COURSERA",
                            "topics": ["Cryptography & Info Theory", "Symmetric Cryptography",
                                       "Asymmetric Cryptography & Key Management"]
                        }
                    },
                    degree_detail={
                        "ms": {
                            "title": "M.S. iN INFORMATiON SECURiTY",
                            "year": "2021-",
                            "institution": "NUST, MCS",
                            "score": ""
                        },
                        "bs": {
                            "title": "B.S. iN ELECTRiCAL(TELECOMMUNiCATiON) ENGiNEERiNG",
                            "year": "2020",
                            "institution": "NUST, MCS",
                            "score": "3.34"
                        },
                        "intermediate": {
                            "title": "HSSC ‑ PRE. ENGiNEERiNG",
                            "year": "2016",
                            "institution": "ARMY PUBLIC SCHOOL & COLLEGE SIALKOT CANTT",
                            "score": "846/1100"
                        },
                        "metric": {
                            "title": "SSC ‑ SCiENCE GROUP",
                            "year": "2014",
                            "institution": "ARMY PUBLIC SCHOOL & COLLEGE SIALKOT CANTT",
                            "score": " 904/1050"
                        },
                    }
                    )
    doc.save()
    return JsonResponse({"doc": "test"})

"""


# def test1(request):
#     doc = MyDocument.objects.all()
#     # print(type(doc))
#     print(doc[0].key.value2["blah2"])
#     for i in doc:
#         print(i.key.value2["blah1"])
#     return JsonResponse({"doc": "test"})


