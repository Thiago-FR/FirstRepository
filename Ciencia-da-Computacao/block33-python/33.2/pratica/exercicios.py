x = 5
y = 3

# print(f"{x} / {y} = {x / y:.2f}")

# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical.

# nome = input("Digite seu nome: ")

# for letra in nome:
#   print(letra.upper())


# Exercício 2:

numeros = input('Digite uma sequência de números separados por espaço: ')

newNumeros = numeros.split(" ")

soma = 0

print(newNumeros)

for num in newNumeros:
  if not num.isdigit():
    print(f"Valor '{num}' não é um número!!!")
  else:
    soma += int(num)

print(f"Soma = {soma}")

