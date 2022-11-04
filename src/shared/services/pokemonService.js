const getPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  const resp = await fetch(url);

  const { results } = await resp.json();

  const pokeObj = results.map((poke) => ({
    name: poke.name,
    url: poke.url,
  }));
  return pokeObj;
};

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return [data];
};

const getPokemonByName = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const resp = await fetch(url);
  const data = await resp.json();

  const pokeObj = {
    id: data.id,
    sprites: data.sprites,
    order: data.order,
    types: data.types,
  };

  return [pokeObj];
};

const getPokemonByType = async (type) => {
  const url = `https://pokeapi.co/api/v2/type/${type}/`;
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};

export const pokemonService = {
  getPokemons,
  getPokemonByName,
  getPokemonById,
  getPokemonByType,
};
