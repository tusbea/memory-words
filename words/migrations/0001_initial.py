# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('word', models.CharField(max_length=50)),
                ('meaning', models.CharField(max_length=50)),
                ('sentence', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('test_count', models.IntegerField()),
                ('correct_answer_count', models.IntegerField()),
                ('percentage_of_correct', models.FloatField()),
                ('owner', models.ForeignKey(to='users.User')),
            ],
        ),
    ]
