import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [favouriteMediaCards, setFavouriteMediaCards] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=lvSRKG0MtbdmjGSdI5odL2Za6aOyR7KUz0jhDrxu"
    );
    setData(response.data);
  }, []);

  let addToFavourite = (oneData) => {
    let tempArr = [...favouriteMediaCards];
    tempArr.push(oneData);
    setFavouriteMediaCards(tempArr);
  };
  let removeFromFavourite = (oneData) => {
    let tempArr = [...favouriteMediaCards];
    tempArr = tempArr.filter((d) => oneData.title != d.title);
    setFavouriteMediaCards(tempArr);
  };

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Container
            data={data}
            favouriteMediaCards={favouriteMediaCards}
            addToFavourite={addToFavourite}
            removeFromFavourite={removeFromFavourite}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
