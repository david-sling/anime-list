import React, { useContext } from "react";
import { CharactersContext } from "../context/Characters";

export default function Footer() {
  const {
    nextPage,
    prevPage,
    characters: { length },
    page,
    nextPageExists,
  } = useContext(CharactersContext);
  return (
    <div className="Footer">
      {nextPageExists ? (
        <button onClick={nextPage}>LOAD MORE</button>
      ) : (
        <p>END OF RESULTS</p>
      )}
    </div>
  );
}
