import React from "react";
import Home from "./Home";
import Search from "./Search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default function Container({ data }) {
  return (
    <div>
      <Route path="/" exact render={() => <Home data={data} />} />
      <Route path="/Search" exact render={() => <Search />} />
    </div>
  );
}
