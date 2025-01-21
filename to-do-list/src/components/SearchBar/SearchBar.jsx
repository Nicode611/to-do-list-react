import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="search-bar-border" style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search..." value={searchTerm} onChange={handleSearch}
      />
      <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
        {filteredData.map((item, index) => (
          <li key={index} style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;