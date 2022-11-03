const getPokemons = async () => {
  let id = Math.random() * 945.1723781823;
  const url = "https://pokeapi.co/api/v2/pokemon";

  const resp = await fetch(url);

  const { results } = await resp.json();

  const pokeObj = results.map((poke) => ({
    name: poke.name,
    url: poke.url,
    id: id,
  }));
  return pokeObj;
};

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return [data];
};

const getPokemonByURL = async (url) => {
  const resp = await fetch(url);
  const { id } = await resp.json();

  const data = await getPokemonById(id);
;
  return data;
};

export const pokemonService = {
  getPokemons,
  getPokemonByURL,
};
