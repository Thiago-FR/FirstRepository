import json

with open("pokemon.json") as file:
  # content = file.read()
  # pokemons = json.loads(content)["results"]

  # Forma direta
  pokemons = json.load(file)["results"]

grass_type_pokemons = [
  pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
  # json_to_write = json.dumps(grass_type_pokemons)
  # file.write(json_to_write)

  # Forma direta
  json.dump(grass_type_pokemons, file)

