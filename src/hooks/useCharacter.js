import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useCharacter(id) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter();
  }, [id]);

  const getCharacter = async () => {
    const {
      data: [data],
    } = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    setCharacter(data);
  };
  return { character, setCharacter };
}
