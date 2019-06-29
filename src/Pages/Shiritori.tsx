import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { IShiritori } from "@/Route";
import lastName from "@/utils/lastName";
import PokemonLists from "@/PokemonLists";

export default ({ history, match }: RouteComponentProps<IShiritori>) => {
  const { params } = match;
  const { keyword } = params;

  const [answered, setAnswered] = React.useState<number[]>([]);

  const handleClick = React.useCallback(
    (name: string, no: number) => (
      _: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
      if (isAnswered(no)) return;
      history.push(`/shiritori/${lastName(name)}`);
      setAnswered([...answered, no]);
    },
    [answered]
  );

  const isAnswered = (no: number) =>
    answered.find(element => element === no) ? true : false;

  return (
    <ul>
      {PokemonLists[keyword].map(pokemon => (
        <li
          key={pokemon.no}
          onClick={handleClick(pokemon.name, pokemon.no)}
          style={
            isAnswered(pokemon.no)
              ? { textDecoration: "line-through" }
              : undefined
          }
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};
