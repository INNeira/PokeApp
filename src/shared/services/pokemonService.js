const getPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  const resp = await fetch(url);
  const { results } = await resp.json();

  return results;
};

const getPokemonById = async (url) => {
  const resp = await fetch(url);
  const { abilities } = await resp.json();

  console.log(abilities);
  return abilities;
};

export const pokemonService = {
  getPokemons,
  getPokemonById,
};
