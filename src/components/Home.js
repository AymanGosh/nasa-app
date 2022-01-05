import React from "react";
import Media from "./Media";

export default function Home({ data }) {
  return (
    <div>
      <Media data={data} />
    </div>
  );
}
