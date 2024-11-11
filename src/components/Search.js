import React from "react";

function Search({ search, setSearch }) {
  // Function to update search state when input changes
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search} // Bind input value to search state
        onChange={handleSearch} // Update search state when typing
      />
    </div>
  );
}

export default Search;
