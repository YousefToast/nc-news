import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../styling/nav.css";

const Nav = ({ user }) => {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="siteName">
          ShrelNews
        </Link>
        <ul>
          <CustomLink to="/articles">All Articles</CustomLink>
          <CustomLink to="/topics">Topics</CustomLink>
        </ul>
        <img className="image" src={user.avatar_url} alt="user"></img>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
