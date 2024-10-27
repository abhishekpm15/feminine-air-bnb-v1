import React, { createContext, useEffect, useState } from "react";
import datas from "../data/places";

const SearchContextProvider = createContext();

const SearchContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(datas);

  useEffect(() => {
    if (search === "") {
      setFilteredPlaces(datas);
    } else {
      const res = datas.filter(
        (place) =>
          place.placeName.toLowerCase().includes(search.toLowerCase()) ||
          place.country.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPlaces(res);
    }
  }, [search]);

  const values = {
    search,
    setSearch,
    places: filteredPlaces,
  };

  return (
    <SearchContextProvider.Provider value={values}>
      {children}
    </SearchContextProvider.Provider>
  );
};

export default SearchContext;
export { SearchContextProvider };
