import React from "react";
import { Link } from "react-router-dom";

import Button from "@/components/KatakanaButton";
import PokemonLists from "@/PokemonLists";

export default () => (
  <>
    {Object.keys(PokemonLists).map((key, i) => (
      <Link to={`/shiritori/${key}`} key={i}>
        <Button text={key} count={PokemonLists[key].length}></Button>
      </Link>
    ))}
  </>
);
