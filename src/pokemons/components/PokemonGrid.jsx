import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { pokemonService } from "../../shared/services/pokemonService";
import { PokemonCardData } from "./PokemonCard/PokemonCardData";

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
    <Box className="bigFather" bg={"whiteAlpha.800"}>
      <Box
        display={"block"}
        textAlign={"center"}
        width={"80%"}
        margin={"auto"}
        padding={["8", "16", "24", "40"]}
        pb={24}
      >
        <Text
          bgClip="text"
          fontSize={["4xl", "5xl", "7xl", "8xl"]}
          fontWeight="extrabold"
          bgGradient="linear(to-l, yellow.400, yellow.600)"
          mb={8}
        >
          Welcome to PokeApp
        </Text>
        <Text fontSize="3xl" fontWeight={"semibold"}>
          Here is a list of some of the <br />
          the pokemons you can view.
        </Text>
      </Box>
      <Flex
        className="cardsFather"
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"80%"}
        margin={"auto"}
      >
        {pokemons.map((pokemon) => (
          <PokemonCardData key={pokemon.name} {...pokemon} />
        ))}
      </Flex>
    </Box>
  );
};
