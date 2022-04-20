import { Link } from "react-router-dom";
import "../styling/nav.css";

const Nav = ({ user }) => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/articles">All Articles</Link> |{" "}
      <Link to="/topics">Topics</Link>{" "}
      <img className="image" src={user.avatar_url} alt="user"></img>
    </nav>
  );
};

export default Nav;
