import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
       
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
          MovieFinder
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
        <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
            Home
          </Link>
          <Link to="/search" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
            Search
          </Link>
          <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
          About
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 focus:outline-none focus:text-blue-600"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
            Home
          </Link>
          <Link to="/search" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
            Search
          </Link>
          <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
          About
          </Link>
          {/* <Link to="/favorites" className="block py-2 px-4 text-gray-700 hover:bg-blue-50">
            Favorites
          </Link> */}
        </div>
      )}
    </nav>
  );
}
