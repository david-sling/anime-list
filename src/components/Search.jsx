import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import search from "@iconify/icons-mdi/search";
import { CharactersContext } from "../context/Characters";

export default function Search() {
  const { name, setName, search } = useContext(CharactersContext);
  return (
    <div className="Search">
      <input
        type="text"
        value={name}
        onChange={search}
        placeholder="Search character"
      />
      <Icon icon={search} style={{ fontSize: "1.5rem" }} />
    </div>
  );
}
