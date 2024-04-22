import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { SearchContextProvider } from "../context/SearchContext";
const Search = () => {
  const { setSearch } = useContext(SearchContextProvider);
  return (
    <div className="flex justify-center">
      <div className="w-40 md:w-[600px] flex items-center justify-center relative">
        <input
          type="text"
          placeholder="Where ? Seach destinations / places"
          className="p-4 rounded-full min-w-[300px] sm:w-[408px] xl:w-[600px] ring-2 ring-black focus:ring-pink-300 focus:outline-none shadow-2xl"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="text-2xl absolute -right-[70px] md:right-[95px] xl:right-0 top-0 bottom-0 flex items-center p-4 bg-pink-300 rounded-full text-white cursor-pointer">
          <IoSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
