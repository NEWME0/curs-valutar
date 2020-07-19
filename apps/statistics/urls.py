from django.urls import path

from apps.statistics import views

urlpatterns = [
    path('predict/', views.PredictListView.as_view(), name='predict_list'),
    path('predict/<int:pk>/', views.PredictDetailView.as_view(), name='predict_detail'),
    path('history/', views.RatesHistoryListView.as_view(), name='history_list'),
    path('history/<int:pk>/', views.RatesHistoryDetailView.as_view(), name='history_detail'),
    path('predict/<int:pk>/days/', views.PredictionDaysDetailView.as_view(), name='prediction_days'),
]
