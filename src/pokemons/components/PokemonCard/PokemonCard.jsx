import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { firstLetterToUpperCase } from "../../../shared/helpers/string-helper";
import { PokemonCardData } from "./PokemonCardData";

export const PokemonCard = ({ name, url }) => {
  return (
    <Box className="pokeContainer" w={"2xs"} m={3} shadow="sm" borderWidth={0}>
      <PokemonCardData url={url} name={name} />
    </Box>
  );
};
