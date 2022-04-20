import { Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;

//font-size: calc(10px + 2vmin);
