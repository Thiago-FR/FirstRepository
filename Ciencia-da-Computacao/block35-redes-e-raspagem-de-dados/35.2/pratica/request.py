import requests

response = requests.get('https://www.betrybe.com')

# print(response.status_code)
# print(response.headers['Content-Type'])
# print(response.content)

# response = requests.post('http://httpbin.org/post', data='some content')
# print(response.text)

# response = requests.get('http://httpbin.org/get')
# print(response.json())

response = requests.get("http://httpbin.org/status/404")
try:
  response.raise_for_status()
except requests.HTTPError:
  print('Ta bão')