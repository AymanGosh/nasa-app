import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Container />
        </div>
      </Router>
    </div>
  );
}

export default App;
