import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Video from "../assets/Video/homepage.mp4";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("Your destination");

  const [showPackageDropdown, setShowPackageDropdown] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Package");

  const destinations = ["Any location", "Nepal", "India", "Sri Lanka"];
  const packages = [
    "Ramayana Trail",
    "Ramayana Trail India",
    "Ramayana Trail Nepal",
    "Ramayana Trail Sri Lanka",
  ];

  return (
    <>
      <div className="relative">
        <Navbar />

        {/* Video Background Section */}
        <div className="h-[100vh] w-full relative overflow-hidden">
          <video
            src={Video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0"></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6 z-10 bottom-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wide text-blue-800 cursor-pointer hover:text-blue-900 transition">
              ✨ Plan Your Travel Now!
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-medium drop-shadow-md mb-8 text-blue-800 cursor-pointer hover:text-blue-900 transition">
              Explore Ramayana Train With US!!🌍
            </p>
          </div>

          {/* Search Bar Overlay */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1000px] z-20 px-4 bottom-60">
            <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 px-6 py-6">

              {/* Destination Dropdown */}
              <div className="relative w-full md:w-[200px]">
                <button
                  onClick={() => {
                    setShowDestinationDropdown(!showDestinationDropdown);
                    setShowPackageDropdown(false);
                  }}
                  className="border px-4 py-2 rounded-md w-full bg-white text-left flex justify-between items-center text-gray-700"
                >
                  {selectedDestination}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDestinationDropdown && (
                  <ul className="absolute z-10 bg-white w-full mt-2 rounded-md shadow-md">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 text-orange-500 font-medium"
                      onClick={() => {
                        setSelectedDestination("Your destination");
                        setShowDestinationDropdown(false);
                      }}
                    >
                      Your destination
                    </li>
                    {destinations.map((location, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-orange-500"
                        onClick={() => {
                          setSelectedDestination(location);
                          setShowDestinationDropdown(false);
                        }}
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Package Dropdown */}
              <div className="relative w-full md:w-[200px]">
                <button
                  onClick={() => {
                    setShowPackageDropdown(!showPackageDropdown);
                    setShowDestinationDropdown(false);
                  }}
                  className="border px-4 py-2 rounded-md w-full bg-white text-left flex justify-between items-center text-gray-700"
                >
                  {selectedPackage}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showPackageDropdown && (
                  <ul className="absolute z-10 bg-white w-full mt-2 rounded-md shadow-md">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 text-orange-500 font-medium"
                      onClick={() => {
                        setSelectedPackage("Package");
                        setShowPackageDropdown(false);
                      }}
                    >
                      Package
                    </li>
                    {packages.map((pkg, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-orange-500"
                        onClick={() => {
                          setSelectedPackage(pkg);
                          setShowPackageDropdown(false);
                        }}
                      >
                        {pkg}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Dates and Search */}
              <input type="date" className="border px-4 py-2 rounded-md w-full md:w-[160px] text-gray-600" />
              <input type="date" className="border px-4 py-2 rounded-md w-full md:w-[160px] text-gray-600" />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md w-full md:w-auto font-semibold transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* ✨ Card Section - Travel, Car Rentals, Destinations */}
        <div className="bg-white py-16 px-6 md:px-16 text-center absolute  top-[80%]">
          <h2 className="text-3xl font-bold text-orange-500 mb-10">Top Destinations</h2>
          <div className="flex items-center justify-center space-x-4">
            {/* Left Arrow */}
            <FaArrowLeft className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />

            {/* Cards */}
            <div className="flex space-x-6 overflow-x-auto no-scrollbar">
              {/* Card 1 */}
              <div className="min-w-[240px] bg-purple-100 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105">
                <img src="/icons/travel.png" alt="Travel" className="w-24 h-24 mb-4" />
                <p className="text-sm text-gray-700 font-semibold mb-2">Book Your</p>
                <h3 className="text-xl font-bold mb-2">Travel Package</h3>
                <a href="#" className="text-blue-500 text-sm hover:underline">Book Now</a>
              </div>

              {/* Card 2 */}
              <div className="min-w-[240px] bg-purple-100 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105">
                <img src="/icons/car.png" alt="Car" className="w-24 h-24 mb-4" />
                <p className="text-sm text-gray-700 font-semibold mb-2">Book Your</p>
                <h3 className="text-xl font-bold mb-2">Car Rentals</h3>
                <a href="#" className="text-blue-500 text-sm hover:underline">Book Now</a>
              </div>

              {/* Card 3 */}
              <div className="min-w-[240px] bg-purple-100 rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105">
                <img src="/icons/destination.png" alt="Destination" className="w-24 h-24 mb-4" />
                <p className="text-sm text-gray-700 font-semibold mb-2">Explore</p>
                <h3 className="text-xl font-bold mb-2">Destinations</h3>
                <a href="#" className="text-blue-500 text-sm hover:underline">Explore</a>
              </div>
            </div>

            {/* Right Arrow */}
            <FaArrowRight className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
