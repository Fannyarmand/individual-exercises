const request = require('request');

function pokemonCount(pokemons) {
  console.log(pokemons.length);
}

function countWeight(pokemons) {
  let count = 0;

  pokemons.forEach(pokemon => {
    if (pokemon.weight.split(" ")[0] > 10) {
      count++;
    }
  })

  console.log(count);
}


function countByWeight(pokemons) {
  return pokemons.filter(pokemon => pokemon.weight.split(" ")[0] > 10).length;
}

function orderPokemonByWeight(pokemons) {
  pokemons.sort((pokemonA, pokemonB) => {
    if (pokemonA.weight.split(" ")[0] < pokemonB.weight.split(" ")[0])
    return -1;
    if (pokemonA.weight.split(" ")[0] > pokemonB.weight.split(" ")[0])
    return 1;
     //return pokemonA.weight.split(" ")[0] - pokemonB.weight.split(" ")[0];
  })
}

request(
  'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
  {json: true},
  (error, response, content) => {
    if (error) {
      return console.log(error);
    }
    const pokemons = content.pokemon;

    pokemonCount(pokemons);
    countWeight(pokemons);
    console.log(countByWeight(pokemons));
    console.log(pokemons);

  }
);