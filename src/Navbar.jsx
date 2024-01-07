import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink to="/gallery">Gallery</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link className={isActive ? "active" : ""} to={to} {...props}>
      {children}
    </Link>
  );
}
