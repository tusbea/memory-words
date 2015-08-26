from django.db import models
from users.models import User

class Word(models.Model):
    word = models.CharField(max_length=50)
    meaning = models.CharField(max_length=50)
    sentence = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    test_count = models.IntegerField()
    correct_answer_count = models.IntegerField()
    percentage_of_correct = models.FloatField()

    owner = models.ForeignKey(User)