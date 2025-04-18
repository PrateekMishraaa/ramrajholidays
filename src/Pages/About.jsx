import React from 'react';
import Navbar from '../Components/Navbar';
import Rammandir from '../assets/mandir.webp';
import Footer from '../Components/Footer';
import { FaFlag, FaGamepad, FaMapMarkedAlt, FaUmbrellaBeach } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Rammandir})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
            <h1 className="text-4xl font-bold">
              About <span className="text-orange-400">Us</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 my-4 rounded-full"></div>
            <p className="text-lg font-medium mb-2">Explore Ramayana Trail With Us</p>
            <p className="text-sm">
              <span className="text-white">Home</span> <span className="mx-1">›</span>{' '}
              <span className="text-orange-400">About</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="w-full flex flex-wrap justify-between items-center px-8 py-16 gap-8 max-w-screen-xl mx-auto">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-orange-500 font-bold text-2xl">Hi! Welcome to RAMRAJ HOLIDAYS</p>
          <p className="text-gray-600 italic py-4 text-xl">Explore The Ramayana Trail With Us!</p>
          <p className="text-orange-500 text-sm leading-relaxed">
            Ram Raj Holidays is your gateway to a world where ancient tales come alive. Specializing
            in one-of-a-kind travel experiences along the Ramayana trail, we offer a journey of
            history, culture, and spirituality like never before.
            <br />
            <br />
            We believe travel is about connecting with people, embracing new cultures, and creating
            lasting memories. Our tours blend ancient traditions with modern comforts, offering a
            harmonious travel experience.
            <br />
            <br />
            Join us at Ram Raj Holidays and let us be your trusted companion as you traverse the
            Ramayana trail. Discover a world where legends come to life and dreams become reality.
          </p>

          {/* Call Button */}
          <a
            href="tel:+919318473156"
            className="mt-6 w-72 text-center inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600 transition"
          >
            CALL TO US: +91 9318473156
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-2/5 h-[300px] md:h-[400px]">
          <img
            src={Rammandir}
            alt="Ramraj Holidays"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Packages Section */}
      <div className="bg-orange-500 py-10 flex justify-center items-center space-x-16 text-white font-bold text-2xl">
      <div className="flex flex-col items-center">
        <span className="text-4xl">240</span>
        <span className="text-base">PACKAGES</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl">960</span>
        <span className="text-base">PLACES</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl">400</span>
        <span className="text-base">EVENTS</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl">120</span>
        <span className="text-base">HOTELS</span>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
      {/* Travel Booking */}
      <div className="flex items-center border border-dashed border-gray-300 p-6">
        <FaFlag className="text-orange-500 text-3xl mr-4" />
        <span className="text-orange-500 font-bold text-lg">TRAVEL BOOKING</span>
      </div>

      {/* Hotel Booking */}
      <div className="flex items-center border border-dashed border-gray-300 p-6">
        <FaMapMarkedAlt className="text-orange-500 text-3xl mr-4" />
        <span className="text-orange-500 font-bold text-lg">HOTEL BOOKING</span>
      </div>

      {/* Events Booking */}
      <div className="flex items-center border border-dashed border-gray-300 p-6">
        <FaGamepad className="text-orange-500 text-3xl mr-4" />
        <span className="text-orange-500 font-bold text-lg">EVENTS BOOKING</span>
      </div>

      {/* Sight Seeing Booking */}
      <div className="flex items-center border border-dashed border-gray-300 p-6">
        <FaUmbrellaBeach className="text-orange-500 text-3xl mr-4" />
        <span className="text-orange-500 font-bold text-lg">SIGHT SEEING BOOKING</span>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default About;
