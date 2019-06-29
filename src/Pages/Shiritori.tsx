import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { IShiritori } from "@/Route";
import PokemonLists from "@/PokemonLists";

export default ({ match }: RouteComponentProps<IShiritori>) => {
  const { params } = match;
  const { keyword } = params;

  return (
    <ul>
      {PokemonLists[keyword].map(pokemon => (
        <li key={pokemon.no}>{pokemon.name}</li>
      ))}
    </ul>
  );
};
