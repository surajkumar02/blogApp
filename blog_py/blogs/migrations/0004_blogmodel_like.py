# Generated by Django 3.2.7 on 2021-09-12 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0003_alter_blogmodel_blog'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogmodel',
            name='like',
            field=models.BooleanField(default=False),
        ),
    ]
