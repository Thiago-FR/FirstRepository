import json, random

with open("exercicios/pokemon.json", 'r', encoding='utf8') as file:
  pokemons = json.load(file)['results']

pokemon = random.choice(pokemons)['name']

dica = ''

while len(dica) <= len(pokemon):
  pokemon_user = input("Quem é esse pokemon? ")

  if pokemon_user != pokemon:
    dica += pokemon[len(dica)]
    print(f"Dica: {dica}")
  else:
    print(f"Parabéns você acertou, Esse Pokémon é: {pokemon}")
    dica = pokemon