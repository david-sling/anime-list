import React, { useContext } from "react";
import { CharactersContext } from "../context/Characters";

export default function Info() {
  const { loading } = useContext(CharactersContext);
  return <div className="Info">{loading && <p>LOADING...</p>}</div>;
}
