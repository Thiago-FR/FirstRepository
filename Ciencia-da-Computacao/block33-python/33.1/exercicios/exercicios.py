# Exercicío 1
def maior_numero(a, b):
    return a if a > b else b

# Exercicío 2
def media_de_numeros(list):
    soma = 0

    for nota in list:
      soma += nota
    
    return soma // len(list)
  
# print(media_de_dois_numeros([100, 60]))

# Exercicío 3
def desenho_quadrado(number):
    for n in range(number):
      print(number * '*')

# desenho_quadrado(5)

# Exercicío 4

def retorna_maio_nome(list):
  nome = ''

  for name in list:
    if len(name) > len(nome):
      nome = name

  return nome

# print(retorna_maio_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# Exercicío 5
from math import ceil
def latas_de_tinta(total_metros):
  litros_por_lata = 18
  cobertura_de_18_litros = litros_por_lata * 3
  custo_por_lata = 80

  return ceil((1 * total_metros) / cobertura_de_18_litros) * custo_por_lata

# print(f'R$ {latas_de_tinta(100)}')

# Exercicío 6
def lados_de_um_triangulo(a, b, c):
  if a + b + c != 180:
    return 'não é triangulo'
  elif a == b and b == c:
    return 'Triângulo Equilátero'
  elif a == b or b == c or c == a:
    return 'Triângulo Isósceles'
  elif a != b and b != c:
    return 'Triângulo Escaleno'

print(lados_de_um_triangulo(60, 60, 60))