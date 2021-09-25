const appendPokemon = (pokemon) => {
	const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} <br> ${img.outerHTML}`;
  ul.appendChild(li);
};

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then((response) => {
    response.json()
    .then((data) => {
      appendPokemon(data);
    })
  });
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    response.json()
    .then((data) => {
      appendPokemon(data);
    })
  })
}

fetchPokemon();