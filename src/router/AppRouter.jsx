import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login} from '../features/auth/pages/Login'
import { PokemonRoutes } from "../features/pokemons/routes/PokemonRoutes";
import {
  Box,
  Flex,
} from "@chakra-ui/react";

export const AppRouter = () => {
  return (
    <Box>

      <Routes>
        <Route path="/*" element={ <PokemonRoutes /> }/>
        <Route path="login" element={ < Login/> }/>
      </Routes>
    </Box>
  );
};
