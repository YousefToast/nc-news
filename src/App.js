import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Topics from "./Components/Topics";

function App() {
  const [topics, setTopics] = useState([]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route
          path="topics"
          element={<Topics topics={topics} setTopics={setTopics} />}
        />
      </Routes>
    </div>
  );
}

export default App;

//font-size: calc(10px + 2vmin);
