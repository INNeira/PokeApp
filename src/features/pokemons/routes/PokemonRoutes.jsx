import React from "react";
import { Route, Routes } from "react-router-dom";
import { PokeHome } from "../pages/PokeHome";
import { Types } from "../pages/types/Types";
import WithSubnavigation from "../../../shared/components/Navbar";

export const PokemonRoutes = () => {
  return (
    <>
      <WithSubnavigation />

      <>
        <Routes>
          <Route path="/" element={<PokeHome />} />
          <Route path="/types" element={<Types />} />
        </Routes>
      </>
    </>
  );
};
