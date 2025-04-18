import React, { useState,useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Video from "../assets/Video/homepage.mp4";
import { FaWifi,FaSwimmer, FaPassport, FaMoneyBillAlt } from "react-icons/fa";

import { gsap } from "gsap";

import { MdEditLocation, MdEventNote, MdHotel, MdLunchDining } from "react-icons/md";
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
import Footer from '../Components/Footer';

const Home = () => {
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("Your destination");

  const [showPackageDropdown, setShowPackageDropdown] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Package");
  const images = [ Jaishreeram1,Jaishreeram2,Jaishreeram3,Jaishreeram4,Jaishreeram5,Jaishreeram6]
  const destinations = ["Any location", "Nepal", "India", "Sri Lanka"];
  const packages = [
    "Ramayana Trail",
    "Ramayana Trail India",
    "Ramayana Trail Nepal",
    "Ramayana Trail Sri Lanka",
  ];
  const spinRef = useRef(null);   // For first spinner
  const spinnRef = useRef(null);  // For second spinner

  useEffect(() => {
    gsap.to(spinRef.current, {
      rotation: 360,
      duration: 5,
      ease: "linear",
      repeat: -1,
    });

    gsap.to(spinnRef.current, {
      rotation: 360,
      duration: 5,
      ease: "linear",
      repeat: -1,
    });
  }, []);

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
        <div>
      {/* Section: Popular Destinations */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-16">
        <div className="relative text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold font-serif text-gray-800">
            Popular <span className="text-orange-400">Destinations</span>
          </p>
          <hr className="h-1 w-40 sm:w-64 md:w-72 mx-auto my-4 border-t-2 border-gray-300" />
          <p className="text-lg sm:text-xl font-light font-serif text-gray-700">
            Find The Perfect Destination To Travel
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Popular ${i}`}
                className="w-full h-56 sm:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section: Packages Offer */}
      <div className="h-[80vh] sm:h-[70vh] w-full bg-orange-400 bg-opacity-90 relative text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-0">
        {/* Social Icons */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 sm:gap-3 p-1 sm:p-2 z-10">
          <a href="#" className="bg-blue-600 p-2 rounded-full text-white text-sm sm:text-base">F</a>
          <a href="#" className="bg-pink-500 p-2 rounded-full text-white text-sm sm:text-base">I</a>
          <a href="#" className="bg-blue-400 p-2 rounded-full text-white text-sm sm:text-base">T</a>
          <a href="#" className="bg-green-500 p-2 rounded-full text-white text-sm sm:text-base">W</a>
          <a href="#" className="bg-green-600 p-2 rounded-full text-white text-sm sm:text-base">?</a>
          <a href="#" className="bg-black p-2 rounded-full text-white text-sm sm:text-base">@</a>
        </div>

        {/* Main Content */}
        <div className="h-full w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="mb-4 text-2xl sm:text-3xl">★★★★★</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">STANDARDIZED</h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">PACKAGES</h2>

            {/* Amenities */}
            <div className="flex justify-center md:justify-start gap-6 sm:gap-12 mt-8 text-sm sm:text-base font-semibold">
              <div className="text-center">
                <FaWifi className="text-2xl mx-auto" />
                <p>Free WiFi</p>
              </div>
              <div className="text-center">
                <MdLunchDining className="text-2xl mx-auto" />
                <p>Breakfast</p>
              </div>
              <div className="text-center">
                <FaSwimmer className="text-2xl mx-auto" />
                <p>Pool</p>
              </div>
              <div className="text-center">
                <IoTv className="text-2xl mx-auto" />
                <p>Television</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative">
            {/* Spinning badge */}
            <div
              ref={spinRef}
              className="absolute -left-10 -top-10 sm:-left-14 sm:-top-14 bg-white text-orange-500 rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-lg"
            >
              <span className="text-lg sm:text-xl font-bold">Go</span>
              <span className="text-xs sm:text-sm tracking-widest">STAYS</span>
            </div>

            {/* Spinning discount circle */}
            <div
              ref={spinnRef}
              className="w-56 h-56 sm:w-72 sm:h-72 bg-orange-500 rounded-full flex flex-col items-center justify-center shadow-lg text-white text-xl sm:text-2xl"
            >
              <span className="font-semibold">Get Upto</span>
              <span className="text-4xl sm:text-5xl font-bold">20%</span>
              <span className="font-semibold">Off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="p-6 md:p-12">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Tips Before Travel */}
        <div>
          <h2 className="bg-orange-400 text-white font-semibold px-4 py-2 inline-block text-sm mb-4 uppercase">
            Tips Before Travel
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <FaPassport className="text-3xl text-sky-400" />
              <span className="font-medium">Bring copies of your passport</span>
            </li>
            <li className="flex items-center space-x-4">
              {/* <GiPostStamp className="text-3xl text-sky-400" /> */}
              <span className="font-medium">Register with your embassy</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaMoneyBillAlt className="text-3xl text-sky-400" />
              <span className="font-medium">Always have local cash</span>
            </li>
          </ul>
        </div>

        {/* Arrangement & Helps */}
        <div>
          <h2 className="bg-orange-400 text-white font-semibold px-4 py-2 inline-block text-sm mb-4 uppercase">
            Arrangement & Helps
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-300 p-4 rounded-md flex items-center gap-3">
              <MdEditLocation className="text-3xl text-white" />
              <span className="font-semibold text-black">Location Manager</span>
            </div>
            <div className="bg-purple-400 p-4 rounded-md flex items-center gap-3">
              {/* <PiSignpost className="text-3xl text-white" /> */}
              <span className="font-semibold text-white">Private Guide</span>
            </div>
            <div className="bg-red-400 p-4 rounded-md flex items-center gap-3">
              <MdHotel className="text-3xl text-white" />
              <span className="font-semibold text-black">Arrangements</span>
            </div>
            <div className="bg-yellow-300 p-4 rounded-md flex items-center gap-3">
              <MdEventNote className="text-3xl text-white" />
              <span className="font-semibold text-black">Events & Activities</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
