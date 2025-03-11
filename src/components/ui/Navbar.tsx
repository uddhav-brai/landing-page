import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const AUTH_ITEMS = [
  { name: "Log In", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-black p-4 fixed w-full top-0 shadow-md z-50 border-b-2 border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-white text-xl font-extrabold tracking-wide uppercase"
        >
          Mero
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-400 hover:text-white uppercase font-semibold tracking-wide transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Authentication Links */}
        <div className="hidden md:flex space-x-4">
          {AUTH_ITEMS.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-5 py-2 text-black rounded-full font-bold uppercase transition ${
                index === 0
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Fixed Position) */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none fixed right-4 top-4"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black p-4 space-y-2 absolute w-full left-0 top-14 shadow-lg z-50 border-t-2 border-gray-800">
          {[...NAV_ITEMS, ...AUTH_ITEMS].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-gray-400 hover:text-white uppercase font-semibold tracking-wide transition"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
