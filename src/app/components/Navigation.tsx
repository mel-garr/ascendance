"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-lg px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="font-bold text-xl">NameCompany</span>
        </div>

        {/* Middle links - desktop only */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className="hover:text-primary font-semibold">
            Home
          </Link>
          <Link href="/builder" className="hover:text-primary font-semibold">
            Builder
          </Link>
          <Link href="/gallery" className="hover:text-primary font-semibold">
            Gallery
          </Link>
          <Link href="/faq" className="hover:text-primary font-semibold">
            FAQ
          </Link>
          <Link href="/contactus" className="hover:text-primary font-semibold">
            Contact Us
          </Link>
        </div>

        {/* Bike + Reserve */}
        <Link
          href="/builder"
          className="hidden md:flex items-center space-x-1 text-lg font-semibold text-primary hover:text-primary-focus"
        >
          <FaMotorcycle className="text-2xl" />
          <span>Reserve</span>
        </Link>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Bike + Reserve */}
          <Link
            href="/builder"
            className="flex items-center space-x-1 text-lg font-semibold text-primary hover:text-primary-focus"
          >
            <FaMotorcycle className="text-2xl" />
            <span>Reserve</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <Link href="/" className="block py-2 hover:text-primary">
            Home
          </Link>
          <Link href="/builder" className="block py-2 hover:text-primary">
            Builder
          </Link>
          <Link href="/gallery" className="block py-2 hover:text-primary">
            Gallery
          </Link>
          <Link href="/faq" className="block py-2 hover:text-primary">
            FAQ
          </Link>
          <Link href="/contactus" className="block py-2 hover:text-primary">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
