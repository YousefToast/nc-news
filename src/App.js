import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Topics from "./Components/Topics";
import userAvatar from "./images/user.jpeg";
import SingleArticle from "./Components/SingleArticle";

function App() {
  const [topics, setTopics] = useState([]);
  const user = {
    username: "Ajdabiya",
    name: "Yousef",
    avatar_url: userAvatar,
  };

  return (
    <div className="App">
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/topics"
          element={<Topics topics={topics} setTopics={setTopics} />}
        />
      </Routes>
    </div>
  );
}

export default App;

//font-size: calc(10px + 2vmin);
