import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Video from "../assets/Video/homepage.mp4";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Boy from "../assets/boy.webp"

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
        <div className="w-full px-8 py-16 bg-white">
  <h2 className="text-4xl font-serif font-semibold text-slate-800 text-center mb-8">Discover & Book <span className='text-xs text-slate-800 font-serif font-semibold'>Next Adventure</span></h2>
  <div className="flex flex-col md:flex-row justify-center gap-6">
    <div className="h-[60vh] w-full md:w-1/3 border-2 rounded-2xl flex items-center justify-center ">
      <img src={Boy} alt="" className='h-[70%] mb-44' />
    </div>
    <div className="h-[60vh] w-full md:w-1/3 border-2 rounded-2xl flex items-center justify-center">
      2
    </div>
    <div className="h-[60vh] w-full md:w-1/3 border-2 rounded-2xl flex items-center justify-center">
      3
    </div>
  </div>
</div>

    


      </div>
    </>
  );
};

export default Home;
