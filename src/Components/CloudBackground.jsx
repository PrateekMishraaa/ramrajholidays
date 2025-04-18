// CloudBackground.jsx
import React from "react";

const CloudBackground = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden bg-white">
      {/* Social Icons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          <a href="#" className="bg-blue-600 text-white p-2"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="bg-orange-600 text-white p-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="bg-blue-900 text-white p-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="bg-red-600 text-white p-2"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-0 w-full h-full z-10">
        <div className="bg-clouds bg-repeat-x h-full w-full opacity-90"></div>
      </div>

      {/* Grass */}
      <div className="absolute bottom-0 w-full h-[40px] bg-grass z-20"></div>
    </div>
  );
};

export default CloudBackground;
