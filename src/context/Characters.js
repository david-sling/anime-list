import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  // const iPage = parseInt(useQuery("page")) || 1;
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  // const iName = useQuery("name") || "";
  const [name, setName] = useState("");

  const [first, setFirst] = useState(true);

  const [nextPageExists, setNextPageExists] = useState(false);

  const history = useHistory();

  useEffect(() => {
    console.log({ characters });
  }, [characters]);

  useEffect(() => {
    getCharacters();
  }, [page, limit, name]);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setPage(1);
  }, [name]);

  const search = ({ target: { value } }) => {
    setName(value);
    history.push(`?page=${1}&name=${value}`);
  };

  const loadMore = () => {
    if (nextPageExists) {
      setPage((p) => p + 1);
    }
  };

  const nextPage = () => {
    if (nextPageExists) {
      setPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    setPage((p) => p - 1 || 1);
  };

  const getCharacters = async () => {
    setLoading(true);
    const {
      data: { results, last_page },
    } = await axios.get(`https://api.jikan.moe/v3/search/anime`, {
      params: {
        limit,
        page,
        order_by: "members",
        q: name.length > 2 && name,
        sort: "desc",
      },
    });
    setCharacters((c) => (page > 1 ? [...c, ...results] : results));
    console.log({ results });
    setNextPageExists(last_page > page);
    setLoading(false);
  };

  const value = {
    characters,
    setCharacters,
    page,
    setPage,
    name,
    setName,
    limit,
    setLimit,
    nextPageExists,
    setNextPageExists,
    nextPage,
    prevPage,
    search,
    loading,
  };
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
