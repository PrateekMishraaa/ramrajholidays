import React from 'react';
import Navbar from '../Components/Navbar';
import Nature from '../assets/nature.jpg'; 
import Map from "../assets/map2.png";
import Footer from '../Components/Footer';
import CloudBackground from '../Components/CloudBackground';

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section with Background */}
      <div
        className="h-auto min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${Nature})` }}
      >
        <div className="w-[90%] md:w-[80%] mx-auto mt-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 py-10">
          {/* Map */}
          <div className="w-full lg:w-1/2">
            <img src={Map} alt="Map" className="w-full rounded-lg shadow-lg cursor-pointer" />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-xl p-6">
            <p className="text-gray-800 font-serif font-semibold text-2xl md:text-3xl mb-6">
              Share Your Query
            </p>

            <input
              type="text"
              placeholder="Your Name..."
              name="YourName"
              className="h-10 w-full border border-gray-300 hover:border-orange-600 transition rounded-xl px-4 mb-4"
            />

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <input
                type="email"
                placeholder="Your Email..."
                name="YourEmail"
                className="h-10 w-full md:w-1/2 border border-gray-300 hover:border-orange-600 transition rounded-xl px-4"
              />
              <input
                type="text"
                placeholder="Your Phone..."
                name="YourPhone"
                className="h-10 w-full md:w-1/2 border border-gray-300 hover:border-orange-600 transition rounded-xl px-4"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="w-full h-32 border border-gray-300 hover:border-orange-600 transition rounded-xl px-4 py-2 mt-4 resize-none"
            />

            <button className="h-12 mt-4 w-full bg-orange-500 text-white font-semibold text-xl rounded-xl hover:bg-orange-600 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full py-12 px-4 sm:px-8 md:px-20">
        <p className="text-3xl sm:text-4xl font-semibold text-orange-600 text-center font-serif mb-10">
          Contact Us
        </p>
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex-1">
            <p className="font-bold text-xl text-gray-800 mb-2">Head Office Address</p>
            <p>
              110,111, Unitech Commercial Tower, 2, Block B, Greenwood City, Sector 45, Gurugram, Haryana 122003
            </p>
          </div>
          <div className="flex-1">
            <p className="font-bold text-xl text-gray-800 mb-2">Ayodhya Office</p>
            <p>
              Near Shanti Oil Mill, Housla Nagar Colony, Modha, Ayodhya Dham Uttar Pradesh - 224001
            </p>
          </div>
          <div className="flex-1">
            <p className="font-bold text-xl text-gray-800 mb-2">Contact Info</p>
            <p>
              Phone: +91 9318473156 <br />
              Mobile: +91 9971834101 <br />
              Email: india@ramrajholidays.in
            </p>
          </div>
        </div>
      </div>

      {/* Cloud Background and Footer */}
      <CloudBackground />
      <Footer />
    </>
  );
};

export default Contact;
