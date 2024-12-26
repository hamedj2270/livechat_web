import requests

TELEGRAM_BOT_TOKEN = 'token your bot'
TELEGRAM_CHAT_ID = 'user account telegram'

def send_telegram_message(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    data = {
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message,
    }
    response = requests.post(url, data=data)
    return response.json()
