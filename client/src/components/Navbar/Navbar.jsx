import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar text-white border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold hover:text-gray-300 transition">
          Damian Campos
        </Link>
        <ul className="flex space-x-6 text-sm">
          <li>
            <NavLink to="/projects" className="nav-link hover:text-gray-300">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link hover:text-gray-300">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="nav-link hover:text-gray-300">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link hover:text-gray-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
