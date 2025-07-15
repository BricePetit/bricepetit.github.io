"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import re_path, include
from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView
from django.conf.urls.i18n import i18n_patterns

from mysite.views import home, skills, academic, education, custom_404_view, test_404_view

# URLs without language prefix (redirects and admin).
urlpatterns = [
    path('admin/', admin.site.urls),
    path('i18n/', include('django.conf.urls.i18n')),
]

# URLs with language prefix.
urlpatterns += i18n_patterns(
    path('', home, name='home'),
    path('skills/', skills, name='skills'),
    path('academic/', academic, name='academic'),
    path('education/', education, name='education'),
    path('test-404/', test_404_view, name='test_404'),
)

# Custom error handlers.
handler404 = 'mysite.views.custom_404_view'
