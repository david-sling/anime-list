import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/Characters";
import Character from "./Character";

export default function Characters() {
  const { characters } = useContext(CharactersContext);
  return (
    <div className="Characters">
      {characters?.map((character) => (
          <Character key={character.char_id} {...character} />
      ))}
    </div>
  );
}
