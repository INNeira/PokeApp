import React, { useEffect, useState } from "react";
import { pokemonService } from "../../../../shared/services/pokemonService";

export const TypesGrid = () => {
  const [types, setTypes] = useState([]);

  const getAllTypes = async () => {
    const types = await pokemonService.getPokemonByType();
    setTypes(types);
    console.log(types);
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  return <div>TypesGrid</div>;
};
