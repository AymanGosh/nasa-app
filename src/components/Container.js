import React from "react";
import Home from "./Home";
import Search from "./Search";
import Favourites from "./Favourites";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Container({
  data,
  changeData,
  addToFavourite,
  favouriteMediaCards,
  removeFromFavourite,
}) {
  return (
    <div>
      <Route path="/" exact render={() => <Home data={data} />} />
      <Route
        path="/Search"
        exact
        render={() => (
          <Search
            addToFavourite={addToFavourite}
            removeFromFavourite={removeFromFavourite}
          />
        )}
      />
      <Route
        path="/Favourites"
        exact
        render={() => (
          <Favourites
            favouriteMediaCards={favouriteMediaCards}
            addToFavourite={addToFavourite}
            removeFromFavourite={removeFromFavourite}
          />
        )}
      />
    </div>
  );
}
