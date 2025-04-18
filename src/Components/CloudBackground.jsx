import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const CloudBackground = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden bg-white">
      {/* Social Icons Sidebar */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          <a href="#" className="bg-blue-600 text-white p-2 rounded-r"><FaFacebookF /></a>
          <a href="#" className="bg-pink-500 text-white p-2 rounded-r"><FaInstagram /></a>
          <a href="#" className="bg-blue-400 text-white p-2 rounded-r"><FaTwitter /></a>
          <a href="#" className="bg-red-600 text-white p-2 rounded-r"><FaYoutube /></a>
        </div>
      </div>

      {/* Cloud Layers */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-clouds bg-repeat-x bg-top opacity-90"></div>

      {/* Grass Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-grass bg-repeat-x z-20"></div>
    </div>
  );
};

export default CloudBackground;
