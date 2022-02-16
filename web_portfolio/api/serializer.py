from rest_framework_mongoengine import serializers

from .models import Portfolio


class PortfolioSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Portfolio
        # fields = []

