from django.db import models
from apps.wallet.models import Currency


class RatesPrediction(models.Model):
    currency = models.ForeignKey(
        Currency, related_name='currencypredictions', on_delete=models.CASCADE
    )
    rate_sell = models.FloatField()
    date = models.DateField()

    def es_doc(self):
        return {
            "id": self.id,
            "currency": self.currency_id,
            "rate_sell": self.rate_sell,
            "date": self.date
        }

    def __str__(self):
        return f'{self.currency}, Rate sell: {self.rate_sell}, {self.date}'
