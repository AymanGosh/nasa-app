import React from "react";
import MediaCard from "./MediaCard";
export default function Favourites({ favouriteMediaCards, addToFavourite }) {
  return (
    <div>
      {favouriteMediaCards.map((d, index) => (
        <MediaCard
          key={index}
          data={d}
          CompName="FavouritesComp"
          addToFavourite={addToFavourite}
        />
      ))}
    </div>
  );
}
