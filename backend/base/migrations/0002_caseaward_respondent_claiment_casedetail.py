# Generated by Django 4.0.6 on 2022-08-18 08:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CaseAward',
            fields=[
                ('isVerified', models.BooleanField(default=False)),
                ('verifiedAt', models.DateTimeField(blank=True, null=True)),
                ('createAt', models.DateTimeField(auto_now_add=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Respondent',
            fields=[
                ('respondent_name', models.CharField(blank=True, max_length=200, null=True)),
                ('respondent_adv_name', models.CharField(blank=True, max_length=200, null=True)),
                ('respondent_number', models.CharField(blank=True, max_length=10, null=True)),
                ('respondent_email', models.EmailField(max_length=254)),
                ('respondent_address', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('case', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='base.caseaward')),
            ],
        ),
        migrations.CreateModel(
            name='Claiment',
            fields=[
                ('claiment_name', models.CharField(blank=True, max_length=200, null=True)),
                ('claiment_adv_name', models.CharField(blank=True, max_length=200, null=True)),
                ('claiment_number', models.CharField(blank=True, max_length=10, null=True)),
                ('claiment_email', models.EmailField(max_length=254)),
                ('claiment_address', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('case', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='base.caseaward')),
            ],
        ),
        migrations.CreateModel(
            name='CaseDetail',
            fields=[
                ('category', models.CharField(blank=True, max_length=200, null=True)),
                ('dispute_value', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('descriptions', models.TextField(blank=True, null=True)),
                ('file', models.FileField(upload_to='uploads/')),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('case', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.caseaward')),
                ('notification', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.notification')),
            ],
        ),
    ]
