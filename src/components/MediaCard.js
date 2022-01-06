import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Favourites from "./Favourites";

export default function MediaCard({
  data,
  CompName,
  addToFavourite,
  removeFromFavourite,
}) {
  const [isLiked, setIsLiked] = useState(false);

  let handelClick = () => {
    console.log("I'M Clicked");
  };

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <div onClick={handelClick}>
          {data.media_type === "image" ? (
            <img src={data.url} />
          ) : (
            <ReactPlayer url={data.url} />
          )}
        </div>
      </div>
      {CompName === "SearchComp" && !isLiked ? (
        <button
          onClick={() => {
            setIsLiked(true);
            addToFavourite(data);
          }}
        >
          LIKE
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLiked(false);
            removeFromFavourite(data);
          }}
        >
          disLIKE
        </button>
      )}
      <hr />
    </div>
  );
}
