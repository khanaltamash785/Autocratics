from django.db import models

from django.contrib.auth.models import User

# Create your models here.


class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    link = models.URLField(null=True, blank=True)
    descriptions = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    createAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.user


class Cases(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    isVerified = models.BooleanField(default=False)
    verifiedAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createAt = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __Str__(self):
        return str(self.createAt)


class CasesDetail(models.Model):
    cases = models.ForeignKey(Cases, on_delete=models.SET_NULL, null=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    disputeValue = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    descriptions = models.TextField(null=True, blank=True, )

    file = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.category)


class Client(models.Model):
    cases = models.OneToOneField(
        Cases, on_delete=models.CASCADE, null=True, blank=True)
    claimantName = models.CharField(max_length=200, null=True, blank=True)
    claimantNumber = models.CharField(max_length=10, null=True, blank=True)
    claimantEmail = models.EmailField()
    claimantAddress = models.CharField(max_length=200, null=True, blank=True)

    # Respondent model file

    respondentName = models.CharField(max_length=200, null=True, blank=True)
    respondentNumber = models.CharField(max_length=10, null=True, blank=True)
    respondentEmail = models.EmailField()
    respondentAddress = models.CharField(max_length=200, null=True, blank=True)

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.cases)
