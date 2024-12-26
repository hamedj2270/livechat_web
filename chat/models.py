from django.db import models

# Create your models here.
class ChatMessage(models.Model):
    CATEGORY_CHOICES = [
        ('technical', 'مشکلات فنی'),
        ('consultation', 'مشاوره پوستی'),
    ]

    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.category} - {self.message[:50]}"