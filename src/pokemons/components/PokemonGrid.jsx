import React, { useEffect, useState } from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { pokemonService } from "../../shared/services/pokemonService";
import { PokemonCard } from "./PokemonCard";

export const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    const pokemons = await pokemonService.getPokemons();
    setPokemons(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <Box m={8}>
      <Flex className="cardsFather" flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Flex>
    </Box>
  );
};
