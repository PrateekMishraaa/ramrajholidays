import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-orange-500 text-white font-semibold py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Section 1 */}
        <div className="md:w-[25%] w-full">
          <p className="font-bold text-lg mb-2">RAMRAJ HOLIDAYS</p>
          <p className="text-sm leading-relaxed">
            Ram Raj Holidays is your gateway to a world where ancient tales come alive. Specializing in one-of-a-kind travel experiences along the Ramayana trail, we offer a journey of history, culture, and spirituality like never before.
          </p>
        </div>

        {/* Section 2 */}
        <div className="md:w-[25%] w-full">
          <p className="font-bold text-lg mb-2">ADDRESS & CONTACT INFO</p>
          <p className="text-sm">Address: Near Shanti Oil Mill, Housla Nagar Colony, Modha, Ayodhya Dham Uttar Pradesh - 224001</p>
          <p className="text-sm mt-2">PHONE: +91 9205733101</p>
          <p className="text-sm mt-1">PHONE: +91 9650605101</p>
          <p className="text-sm mt-1">PHONE: +91 9318473156</p>
          <p className="text-sm mt-1">PHONE: +91 9971834101</p>
        </div>

        {/* Section 3 */}
        <div className="md:w-[25%] w-full">
          <p className="font-bold text-lg mb-2">OTHER PAGES</p>
          <p className="text-sm mt-2">About us</p>
          <p className="text-sm mt-2">Sightseeing</p>
          <p className="text-sm mt-2">Cancellation Policy</p>
        </div>

        {/* Section 4 */}
        <div className="md:w-[25%] w-full">
          <p className="font-bold text-lg mb-2">FOLLOW WITH US</p>
          <p className="text-sm mb-4">Join the thousands of others. There are many variations.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/ramrajholidays" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/ram_raj_holidays/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@RamRajHolidays" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
    </footer>
    <div className='h-10 w-full '>
      <p className='ml-[35%] '>Copyrights @ 2024 RamRaj Holidays. All Right Reserved</p>
    </div>
    </>
  );
};

export default Footer;
