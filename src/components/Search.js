import React, { useState } from "react";
import { useSearchParams } from "react-router";
import debounce from "lodash.debounce";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSearch = debounce((value) => {
    setSearchParams({ q: value });
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <div>
      <h2>Search</h2>
      <div>
        <input type="text" value={query} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Search;
