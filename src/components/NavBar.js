import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
export default function NavBar() {
  return (
    <div>
      <div>
        <Link to="/">Home </Link>
        <Link to="/Search">Search </Link>
        <Link to="/Favourites">Favourites </Link>
      </div>
    </div>
  );
}
