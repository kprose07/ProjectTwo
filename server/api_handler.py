import requests
from flask import Flask, render_template


class Page:
    def __init__(self, title, author, date, text, image_url):
        self.title = title
        self.author = author
        self.date = date
        self.text = text
        self.image_url = image_url


def get_pages():
    api_key = "pub_260732abfa91a1bab7751137684271e27187d"
    keywords = ["Music", "Food", "Party", "Sports", "Money"]
    pages = []

    for keyword in keywords:
        url = f"https://newsdata.io/api/1/news?apikey={api_key}&q={keyword}&language=en"

        response = requests.get(url)
        data = response.json()

        if 'results' in data:
            page = Page(
                title = data['results'][0]['title'] or "Not Available",
                author=data['results'][0]['creator'] or "Anonymous",
                date=data['results'][0]['pubDate'] or "Not Available",
                text=data['results'][0]['content'] or "Not Available",
                image_url=data['results'][0]['image_url'] or "Not Available"
            )
            pages.append(page)

    return pages