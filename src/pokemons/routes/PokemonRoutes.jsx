import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokeHome } from "../pages/PokeHome";
import { Fire } from "../pages/types/Fire";
import WithSubnavigation from "../../shared/components/Navbar";
import { Box, Flex, Container } from "@chakra-ui/react";

export const PokemonRoutes = () => {
  return (
    <>
      <WithSubnavigation />

      <>
        <Routes>
          <Route path="/" element={<PokeHome />} />
          <Route path="/type/fire" element={<Fire />} />
        </Routes>
      </>
    </>
  );
};
