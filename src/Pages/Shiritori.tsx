import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { IShiritori } from "@/Route";
import lastName from "@/utils/lastName";
import PokemonLists from "@/PokemonLists";

export default ({ history, match }: RouteComponentProps<IShiritori>) => {
  const { params } = match;
  const { keyword } = params;

  const handleClick = React.useCallback(
    (name: string) => (_: any) => {
      history.push(`/shiritori/${lastName(name)}`);
    },
    []
  );

  return (
    <ul>
      {PokemonLists[keyword].map(pokemon => (
        <li key={pokemon.no} onClick={handleClick(pokemon.name)}>
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};
