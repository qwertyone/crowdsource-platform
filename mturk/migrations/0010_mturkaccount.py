# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-03-11 22:14
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mturk', '0009_auto_20160130_0734'),
    ]

    operations = [
        migrations.CreateModel(
            name='MTurkAccount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_id', models.CharField(blank=True, max_length=64, null=True)),
                ('client_secret', models.CharField(blank=True, max_length=128, null=True)),
                ('is_valid', models.BooleanField(default=True)),
                ('created_timestamp', models.DateTimeField(auto_now_add=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='mturk_account', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
