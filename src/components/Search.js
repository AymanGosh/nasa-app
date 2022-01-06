import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Media from "./Media";
import MediaCard from "./MediaCard";

export default function Search({ addToFavourite }) {
  let [searchInput, setSearchInput] = useState("");
  let [searchData, setSearchData] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  let handelSearch = async () => {
    let response = await axios.get(
      `https://images-api.nasa.gov/search?q=${searchInput}`
    );

    response = response.data.collection.items.map((d) => {
      let url;
      d.links ? (url = d.links[0].href) : (url = "NoN");
      let media_type;
      d.links ? (media_type = d.links[0].render) : (media_type = "NoN");
      return {
        title: d.data[0].title,
        explanation: d.data[0].description,
        media_type: media_type,
        url: url,
      };
    });
    setSearchData(response);
    //console.log(response);
    setSearchInput("");
  };

  useEffect(() => {
    //console.log(searchData);
  }, [searchData]);

  return (
    <div>
      <input
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => searchItems(e.target.value)}
      />
      <button onClick={handelSearch}>Search</button>
      {searchData.map((d, index) => (
        <MediaCard
          key={index}
          data={d}
          CompName="SearchComp"
          addToFavourite={addToFavourite}
        />
      ))}
    </div>
  );
}
