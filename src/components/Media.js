import React from "react";
import ReactPlayer from "react-player";

export default function Media({ data, CompName }) {
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.explanation}</p>
        {data.media_type === "image" ? (
          <img src={data.url} />
        ) : (
          <ReactPlayer url={data.url} />
        )}
      </div>
      {CompName === "SearchComp" ? <button>LIKE</button> : null}
    </div>
  );
}
