import React, { useEffect, useState } from "react";
import {
  Box,
  UnorderedList,
  ListItem,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { pokemonService } from "../../../../shared/services/pokemonService";
import { firstLetterToUpperCase } from "../../../../shared/helpers/string-helper";



export const PokemonCardData = ({ url, name }) => {
  const [pokemonsData, setPokemonsData] = useState([]);

  const getPokemonData = async () => {
    const pokemonsData = await pokemonService.getPokemonByName(name);
    setPokemonsData(pokemonsData);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  // getPokemonData();

  return (
    <Box className="pokeContainer" w={"2xs"} m={3} shadow="sm" borderWidth={0}>
      <Box bgGradient="linear(to-b, yellow.200, yellow.400)" borderRadius={12}>
        {pokemonsData.map((pokeData) => (
          <Box key={pokeData.id}>
            <Box
              className="imgDiv"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                boxSize={"3xs"}
                objectFit={"cover"}
                src={pokeData.sprites.front_default}
                m={0}
              ></Image>
            </Box>

            <Box className="pokeInfo" p={5} minH={44}>
              <Heading fontSize="xl">{firstLetterToUpperCase(name)}</Heading>
              <Text as={"sub"}>N°: {pokeData.order}</Text>
              <UnorderedList marginInlineStart={0} mt={3}>
                <Text fontWeight={"semibold"} as={"i"}>
                  Types
                </Text>
                {pokeData.types.map((el) => (
                  <ListItem
                    listStyleType={"none"}
                    key={pokeData.order + el.slot}
                  >
                    {firstLetterToUpperCase(el.type.name)}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
