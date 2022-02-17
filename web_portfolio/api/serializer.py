from rest_framework_mongoengine import serializers

from .models import Portfolio


class PortfolioSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Portfolio
        # fields = []
        # read_only_fields = ('locationName', 'locationCode')

    def validate(self, attrs):
        self._kwargs["partial"] = True
        return super().validate(attrs)



