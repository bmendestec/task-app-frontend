import requests
from bs4 import BeautifulSoup


url ='https://google.com.br'

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    links = soup.find_all('a')

    for link in links:
        print(link.get('href'))
else:
    print("Erro ao acessar o site: ", response.status_code)