# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-24 00:55
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('crowdsourcing', '0068_worker_scope'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('min_sequence', models.IntegerField(default=1)),
                ('max_sequence', models.IntegerField()),
                ('tasks_per_project', models.IntegerField(default=1)),
                ('exclusive', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='ProjectGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('aux_attrib', django.contrib.postgres.fields.jsonb.JSONField(null=True)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='random2.Group')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='groups', to='crowdsourcing.Project')),
            ],
        ),
    ]