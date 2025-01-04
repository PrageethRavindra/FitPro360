// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-white text-2xl font-bold">
            Minator
          </a>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/">
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-gray-300">About</a>
          </Link>
          <Link href="/services">
            <a className="text-white hover:text-gray-300">Services</a>
          </Link>
          <Link href="/contact">
            <a className="text-white hover:text-gray-300">Contact</a>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
