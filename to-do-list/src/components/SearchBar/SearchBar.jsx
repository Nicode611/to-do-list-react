import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./SearchBar.css";
import ListIconsContainer from "../ListIconsContainer/ListIconsContainer";

const SearchBar = () => {

  let lists = useSelector(state => state.lists.value)


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = lists.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
      <div className="list-icon-section">
        <input
          className="search-bar-input"
          type="text"
          placeholder="Search..." value={searchTerm} onChange={handleSearch}
        />
        <ListIconsContainer data={filteredData}></ListIconsContainer>
      </div> 
  );
};

export default SearchBar;