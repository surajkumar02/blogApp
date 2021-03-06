# Generated by Django 3.2.7 on 2021-09-02 13:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=55, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='BlogModel',
            fields=[
                ('blog_id', models.AutoField(primary_key=True, serialize=False)),
                ('blog', models.CharField(max_length=600)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blogs.user')),
            ],
        ),
    ]
