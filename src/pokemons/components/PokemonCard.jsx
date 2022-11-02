import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, HStack } from "@chakra-ui/react";
import { pokemonService } from "../../shared/services/pokemonService";

function PokeCard({ name }) {
  return (
    <Box w={'xl'} p={5} m={3} shadow="sm" borderWidth="1px">
      <Heading fontSize="xl">{name}</Heading>
      {/* <Text mt={4}>{desc}</Text> */}
    </Box>
  );
}

export const PokemonCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemonData = async () => {
    const pokemon = pokemonService.getPokemonById(url);
    setPokemon(pokemon);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return <PokeCard name={name} />;
};
