import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Topics from "./Components/Topics";
import userAvatar from "./images/user.jpeg";

function App() {
  const [topics, setTopics] = useState([]);
  const user = {
    username: "Ajdabiya",
    name: "Yousef",
    avatar_url: userAvatar,
  };

  return (
    <div className="App">
      <Header />
      <Nav user={user} />
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
