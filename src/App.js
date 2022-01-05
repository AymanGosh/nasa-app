import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const response = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=lvSRKG0MtbdmjGSdI5odL2Za6aOyR7KUz0jhDrxu"
    );
    setData(response.data);
  }, []);

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Container data={data} />
        </div>
      </Router>
    </div>
  );
}

export default App;
