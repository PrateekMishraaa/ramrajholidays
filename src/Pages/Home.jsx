import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Video from "../assets/Video/homepage.mp4";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Boy from "../assets/boy.webp"
import Car from "../assets/car.webp"
import Planet from "../assets/planet.webp"
import Rammandir from "../assets/rammandir.webp"
import Janakpur from "../assets/janakpur.webp"
import Matale from "../assets/matale.webp"
import Ramayan from "../assets/RamayanTrail.webp"
// import HanumanGarahi from "../assets/hanumangrahi.webp"
import Panchvati from "../assets/panchvati.webp"

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
    <div className="relative w-full overflow-hidden">
      <Navbar />

      {/* Video Background Section */}
      <div className="h-[100vh] w-full relative">
        <video
          src={Video}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-blue-800 cursor-pointer hover:text-blue-900 transition">
            ✨ Plan Your Travel Now!
          </h1>
          <p className="text-md sm:text-lg md:text-xl font-medium text-blue-800 drop-shadow-md mb-6 cursor-pointer hover:text-blue-900 transition">
            Explore Ramayana Train With US!!🌍
          </p>
        </div>

        {/* Search Bar */}
        <div className="absolute w-full px-4 sm:px-8 md:px-20 bottom-20 z-20">
          <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 p-6 max-w-5xl mx-auto">
            {/* Destination Dropdown */}
            <div className="relative w-full md:w-1/5">
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
            <div className="relative w-full md:w-1/5">
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

            {/* Dates */}
            <input type="date" className="border px-4 py-2 rounded-md w-full md:w-1/5 text-gray-600" />
            <input type="date" className="border px-4 py-2 rounded-md w-full md:w-1/5 text-gray-600" />

            {/* Search Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md w-full md:w-auto font-semibold transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <section className="w-full px-4 sm:px-10 md:px-20 pt-16 md:pt-28">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-gray-700 mb-4">
          Discover & Book <br /><span className="text-base font-normal">Your Next Adventure</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {[{img: Boy, title: "Travel Package"}, {img: Car, title: "Car Rental"}, {img: Planet, title: "Destinations"}].map((card, index) => (
            <div key={index} className="bg-[#f3e8ff] h-[60vh] w-full md:w-1/3 rounded-2xl shadow-lg flex flex-col items-center justify-end py-6 px-4 text-center">
              <img src={card.img} alt={card.title} className="h-[60%] object-contain mb-4" />
              <h3 className="font-semibold text-2xl md:text-3xl font-serif text-gray-800">{index < 2 ? 'Book Your' : 'Explore'}</h3>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 font-serif">{card.title}</h2>
              <a href="#" className="text-blue-600 text-sm mt-2 font-serif font-semibold border-2 p-2 rounded-xl hover:bg-black text-yellow-800 transition">
                {index < 2 ? 'Book Now' : 'Explore'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations & Packages Sections */}
      {["Top Destinations", "Tour Packages"].map((sectionTitle, sectionIndex) => (
        <section key={sectionIndex} className="w-full px-4 sm:px-10 md:px-20 pt-20">
          <h2 className="text-3xl md:text-5xl font-semibold font-serif text-center text-gray-600 mb-2">
            {sectionTitle.split(" ")[0]} <span className="text-orange-400">{sectionTitle.split(" ")[1]}</span>
          </h2>
          <p className="text-center text-md md:text-xl font-serif text-gray-600 mb-10">
            {sectionIndex === 0 ? 'Book Your Ramayana Trail With Us!' : 'FIND YOUR PERFECT SPIRITUAL TOUR OF INDIA'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[Rammandir, Janakpur, Matale,Ramayan,Panchvati].map((imgSrc, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden h-72 w-full">
                <img src={imgSrc} alt={`Location ${idx}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0  flex flex-col justify-end p-4 text-white">
                  <p className="text-2xl font-semibold font-serif">INDIA</p>
                  <p className="text-xs font-serif">Starting from</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
