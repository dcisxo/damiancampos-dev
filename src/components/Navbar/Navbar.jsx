import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar text-white border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold hover:text-gray-300 transition"
        >
          Damian Campos
        </Link>
        <ul className="flex space-x-6 text-sm">
          <li>
            <Link href="/projects" className="nav-link hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link hover:text-gray-300">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/resume" className="nav-link hover:text-gray-300">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
