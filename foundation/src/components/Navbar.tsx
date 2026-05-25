// src/components/Navbar.jsx
import logo from "../assets/logo.jpg";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center">

      <div className="p-2 rounded shadow-md">
        <img src={logo}
        alt="mutakwa foundation"
        className="h-10 w-auto" />
        </div>
      {/* Logo */}
      <h1 className="text-4xl font-bold tracking-wide">
        Mutakwa Foundation
      </h1>

            <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-secondary transition">Home</a>
          <a href="#" className="hover:text-secondary transition">About</a>
          <a href="#" className="hover:text-secondary transition">Programs</a>
          <a href="#" className="hover:text-secondary transition">Contact</a>

          <button className="bg-secondary text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
            Donate
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-secondary"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-secondary"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-secondary"
          >
            Programs
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-secondary"
          >
            Contact
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 rounded-md font-semibold"
          >
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;