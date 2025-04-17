import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Video from "../assets/Video/homepage.mp4";
import { FaWifi,FaSwimmer } from "react-icons/fa";
import { MdLunchDining } from "react-icons/md";
import { IoTv } from "react-icons/io5";
import Boy from "../assets/boy.webp"
import Car from "../assets/car.webp"
import Planet from "../assets/planet.webp"
import Rammandir from "../assets/rammandir.webp"
import Janakpur from "../assets/janakpur.webp"
import Matale from "../assets/matale.webp"
import Ramayan from "../assets/RamayanTrail.webp"
import Panchvati from "../assets/panchvati.webp"
import Jaishreeram1 from "../assets/jaishreeram.webp"
import Jaishreeram2 from "../assets/jaishreeram2.webp"
import Jaishreeram3 from "../assets/jaishreeram3.webp"
import Jaishreeram4 from "../assets/jaishreeram4.webp"
import Jaishreeram5 from "../assets/jaishreeram5.webp"
import Jaishreeram6 from "../assets/jaishreeram6.webp"

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
      <div className="relative w-full overflow-hidden">
        <Navbar />

        {/* Video Section */}
        <div className="h-[100vh] w-full relative">
          <video
            src={Video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-blue-800 cursor-pointer hover:text-blue-900 transition">
              ✨ Plan Your Travel Now!
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-medium text-blue-800 drop-shadow-md mb-6 cursor-pointer hover:text-blue-900 transition">
              Explore Ramayana Train With US!!🌍
            </p>
          </div>

          {/* Search Section */}
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

              <input type="date" className="border px-4 py-2 rounded-md w-full md:w-1/5 text-gray-600" />
              <input type="date" className="border px-4 py-2 rounded-md w-full md:w-1/5 text-gray-600" />

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
            {[{ img: Boy, title: "Travel Package" }, { img: Car, title: "Car Rental" }, { img: Planet, title: "Destinations" }].map((card, index) => (
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

        {/* Top Destinations / Packages */}
        {["Top Destinations", "Tour Packages"].map((sectionTitle, sectionIndex) => (
          <section key={sectionIndex} className="w-full px-4 sm:px-10 md:px-20 pt-20">
            <h2 className="text-3xl md:text-5xl font-semibold font-serif text-center text-gray-600 mb-2">
              {sectionTitle.split(" ")[0]} <span className="text-orange-400">{sectionTitle.split(" ")[1]}</span>
            </h2>
            <p className="text-center text-md md:text-xl font-serif text-gray-600 mb-10">
              {sectionIndex === 0 ? 'Book Your Ramayana Trail With Us!' : 'FIND YOUR PERFECT SPIRITUAL TOUR OF INDIA'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[Rammandir, Janakpur, Matale, Ramayan, Panchvati].map((imgSrc, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden h-72 w-full">
                  <img src={imgSrc} alt={`Location ${idx}`} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-gradient-to-t from-black/40 via-black/10 to-transparent">
                    <p className="text-2xl font-semibold font-serif text-white">INDIA</p>
                    <p className="text-xs font-serif font-bold">Starting from</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Popular Destinations */}
        <section className="px-4 sm:px-10 md:px-20 py-20">
          <div className="relative text-center">
            <p className="text-5xl font-semibold font-serif text-gray-800">
              Popular <span className="text-orange-400">Destinations</span>
            </p>
            <hr className="h-1 w-72 mx-auto my-4 border-t-2 border-gray-300" />
            <p className="text-2xl font-light font-serif text-gray-700">Find The Perfect Destination To Travel</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[Jaishreeram1, Jaishreeram2, Jaishreeram3, Jaishreeram4, Jaishreeram5, Jaishreeram6].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                <img src={img} alt={`Popular ${i}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </section>
        <div className='h-[70vh] w-full border-2 bg-orange-400 opacity-90'>
          <div className='h-full w-full border2 flex justify-between p-40 text-white font-sans  font-semibold text-5xl'>
           <div>
           <div className='ml-24'>*****</div>
           <p>Standardized</p>
           <p className='ml-12'>Packages</p>
           <div className='h-20 w-full font-light text-3xl border-2 flex justify-between mt-4'>
           <div>
           <a href=""><FaWifi/></a>
           <p className='text-sm font-semibold'>Free WiFi</p>
           </div>
           <div>
           <a href=""><MdLunchDining/></a>
           <p className='text-sm font-semibold'>BreakFast</p>
           </div>
           <div>
           <a href=""><FaSwimmer/></a>
           <p className='text-sm font-semibold'>Pool</p>
           </div>
           <div>
           <a href=""><IoTv/></a>
           <p className='text-sm font-semibold'>Telivision</p>
           </div>
           </div>
           </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
