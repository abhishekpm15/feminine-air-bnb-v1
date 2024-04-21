import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { SearchContextProvider } from "../context/SearchContext";
const Search = () => {
  const { setSearch } = useContext(SearchContextProvider);
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[600px]">
        <input
          type="text"
          placeholder="Where ? Seach destinations / places"
          className="p-4 rounded-full w-[300px] sm:w-[408px] xl:w-[600px] ring-2 ring-black focus:ring-pink-300 focus:outline-none shadow-2xl"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <div className="text-2xl absolute right-24 xl:right-0 flex items-center p-4 inset-y-0 bg-pink-300 rounded-full text-white cursor-pointer">
          <IoSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
