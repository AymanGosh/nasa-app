import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  let handelSearch = async () => {
    console.log(searchInput);

    const response = await axios.get(
      `https://images-api.nasa.gov/search?q=${searchInput}`
    );
    console.log(response.data.collection.items);
    setSearchInput("");
  };

  return (
    <div>
      <input
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => searchItems(e.target.value)}
      />
      <button onClick={handelSearch}>Search</button>
    </div>
  );
}
