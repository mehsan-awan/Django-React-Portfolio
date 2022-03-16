from django.db import models
from mongoengine import *


# Create your models here.


class PersonalDetails(EmbeddedDocument):
    name = StringField()
    profession = StringField()
    quote = StringField()
    image = StringField()
    email = StringField()
    address = StringField()
    interests = DictField()
    accounts = DictField()
    ManagementExperience = DictField()
    Courses = DictField()
    Certifications = DictField()
    degree_detail = DictField()


class Portfolio(Document):
    name = StringField()
    summary = StringField()
    profession = StringField()
    quote = StringField()
    image = StringField()
    email = EmailField()
    address = StringField()
    interests = ListField()
    accounts = DictField()
    managementExperience = DictField()
    courses = ListField()
    certifications = DictField()
    degree_detail = DictField()
    test_field = StringField()
    # personal_details = EmbeddedDocumentField(PersonalDetails)

