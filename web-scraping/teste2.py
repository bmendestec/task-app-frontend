from selenium import webdriver
from selenium.webdriver.common.by import By

# Configurando o driver do navegador (neste caso, Chrome)
driver = webdriver.Chrome('caminho/do/chromedriver')

# Abrindo a página
driver.get('https://exemplo.com')

# Encontrando e capturando elementos da página
elementos = driver.find_elements(By.CLASS_NAME, 'nome-da-classe')

# Exibindo os textos dos elementos encontrados
for elemento in elementos:
    print(elemento.text)

# Fechando o navegador
driver.quit()
