import React, { useState } from 'react';
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-gray-200">
        {/* Top Bar */}
        <div className="bg-[#ef950f] text-white py-3 px-4">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-semibold text-center md:text-left">
            <li>
              <a href="#" className="block">
                <span className="font-semibold">Address:</span> Near Shanti Oil Mill, Housla Nagar Colony, Modha, Ayodhya Dham, Uttar Pradesh - 224001
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <span className="font-semibold">Phone:</span> +91-9318473156 | +91-9650605101
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <span className="font-semibold">E-mail:</span> india@ramrajholidays.in
              </a>
            </li>
            <li className="flex gap-3">
              <a href="https://www.facebook.com/ramrajholidays" className="hover:text-blue-600 transition">
                <FaFacebookSquare size={20} />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.instagram.com/ram_raj_holidays/" className="hover:text-pink-600 transition">
                <FaInstagram size={20} />
              </a>
            </li>
          </ul>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-4 md:px-12 py-4 relative z-20 bg-white shadow-md">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-black font-medium">
            <li><a href="/" className="hover:text-[#ef950f] transition hover:underline">Home</a></li>
            <li><a href="/about" className="hover:text-[#ef950f] transition hover:underline">About</a></li>
            <li><a href="/package" className="hover:text-[#ef950f] transition hover:underline">Packages</a></li>
            <li><a href="/sight-seeing" className="hover:text-[#ef950f] transition hover:underline">SightSeeing</a></li>
            <li><a href="/chardham" className="hover:text-[#ef950f] transition hover:underline">CharDham</a></li>
            <li><a href="/payment" className="hover:text-[#ef950f] transition hover:underline">Payment</a></li>
            <li><a href="/contact-us" className="hover:text-[#ef950f] transition hover:underline">Contact-Us</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow-md">
            <ul className="flex flex-col gap-4 text-black font-medium">
              <li><a href="/" className="hover:text-[#ef950f] transition">Home</a></li>
              <li><a href="/about" className="hover:text-[#ef950f] transition">About</a></li>
              <li><a href="/package" className="hover:text-[#ef950f] transition">Packages</a></li>
              <li><a href="/sight-seeing" className="hover:text-[#ef950f] transition">SightSeeing</a></li>
              <li><a href="/chardham" className="hover:text-[#ef950f] transition">CharDham</a></li>
              <li><a href="/payment" className="hover:text-[#ef950f] transition">Payment</a></li>
              <li><a href="/contact-us" className="hover:text-[#ef950f] transition">Contact-Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
