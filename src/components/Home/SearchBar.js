import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { searchBarIconsColor } from "../../utils/constants";

const SearchBar = ({ handleFilter }) => {
  const [searchText, setSearchText] = useState("");

  const clearInput = () => {
    setSearchText("");
    handleFilter("");
  };

  return (
    <div className=" rounded-lg m-4 flex  items-center bg-slate-300 pr-2">
      <input
        type="text"
        data-testid="searchInput"
        placeholder="Search restaurants"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleFilter(e.target.value);
        }}
        className="px-4 py-4 w-11/12 text-black  bg-slate-300  mr-3 rounded-md "
      />

      {searchText ? (
        <button onClick={clearInput}>
          <IoMdClose
            size={25}
            color={`${searchBarIconsColor}`}
            className="mr-2"
          />
        </button>
      ) : (
        <IoSearchSharp
          size={25}
          color={`${searchBarIconsColor}`}
          className="mr-2"
        />
      )}
    </div>
  );
};

export default SearchBar;
