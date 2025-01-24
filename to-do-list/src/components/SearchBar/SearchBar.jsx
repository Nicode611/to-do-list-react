import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );

  return (
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search..." value={searchTerm} onChange={handleSearch}
      />
      /* <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
        {filteredData.map((item, index) => (
          <li key={index} style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}>
            {item}
          </li>
        ))}
      </ul> */
  );
};

export default SearchBar;