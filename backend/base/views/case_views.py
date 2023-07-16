from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializers import CasesSerializer
from base.models import Cases, CasesDetail, Client

from rest_framework import status

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addClientDetails(request):
    user = request.user
    data = request.data

    cases = Cases.objects.create(
        user=user,
    )

    client = Client.objects.create(
        cases = cases,
        claimantName = data['clientDetails']['claimantName'],
        claimantNumber = data['clientDetails']['claimantNumber'],
        claimantEmail = data['clientDetails']['claimantEmail'],
        claimantAddress = data['clientDetails']['claimantAddress'],
        respondentName = data['clientDetails']['respondentName'],
        respondentNumber = data['clientDetails']['respondentNumber'],
        respondentEmail = data['clientDetails']['respondentEmail'],
        respondentAddress = data['clientDetails']['respondentAddress'],
            
    )

    detail = CasesDetail.objects.create(
        cases = cases,
        category = data['casesDetails']['category'],
        disputeValue = data['casesDetails']['disputeValue'],
        descriptions = data['casesDetails']['descriptions'],
        file = data['casesDetails']['file'],
    )

    serializer = CasesSerializer(cases, many=False )
    return Response(serializer.data)


