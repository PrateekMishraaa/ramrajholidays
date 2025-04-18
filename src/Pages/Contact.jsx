import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CloudBackground from '../Components/CloudBackground';
import Nature from '../assets/nature.jpg';
import Map from '../assets/map2.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { Name, Email, PhoneNumber, Message } = formData;

    // 1) Validate
    if (!Name || !Email || !PhoneNumber || !Message) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      // 2) Send to backend
      await axios.post(
        "http://localhost:5000/api/query",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      // 3) Notify success & reset form
      toast.success("Form submitted successfully");
      setFormData({ Name: "", Email: "", PhoneNumber: "", Message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
            <img
              src={Map}
              alt="Map"
              className="w-full rounded-lg shadow-lg cursor-pointer"
            />
          </div>

          {/* Form */}
          <form
            className="w-full lg:w-1/2 bg-white rounded-lg shadow-xl p-6"
            onSubmit={handleSubmit}
          >
            <p className="text-gray-800 font-serif font-semibold text-2xl md:text-3xl mb-6">
              Share Your Query
            </p>

            <input
              type="text"
              name="Name"
              placeholder="Your Name..."
              value={formData.Name}
              onChange={handleChange}
              className="h-10 w-full border border-gray-300 hover:border-orange-600 transition rounded-xl px-4 mb-4"
            />

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <input
                type="email"
                name="Email"
                placeholder="Your Email..."
                value={formData.Email}
                onChange={handleChange}
                className="h-10 w-full md:w-1/2 border border-gray-300 hover:border-orange-600 transition rounded-xl px-4"
              />
              <input
                type="text"
                name="PhoneNumber"
                placeholder="Your Phone..."
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="h-10 w-full md:w-1/2 border border-gray-300 hover:border-orange-600 transition rounded-xl px-4"
              />
            </div>

            <textarea
              name="Message"
              placeholder="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full h-32 border border-gray-300 hover:border-orange-600 transition rounded-xl px-4 py-2 mt-4 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`h-12 mt-4 w-full font-semibold text-xl rounded-xl transition 
                ${loading
                  ? "bg-gray-400 cursor-not-allowed text-gray-200"
                  : "bg-orange-500 hover:bg-orange-600 text-white"}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="w-full py-12 px-4 sm:px-8 md:px-20">
        <p className="text-3xl sm:text-4xl font-semibold text-orange-600 text-center font-serif mb-10">
          Contact Us
        </p>
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex-1">
            <p className="font-bold text-xl text-gray-800 mb-2">
              Head Office Address
            </p>
            <p>
              110,111, Unitech Commercial Tower, 2, Block B, Greenwood City,
              Sector 45, Gurugram, Haryana 122003
            </p>
          </div>
          <div className="flex-1">
            <p className="font-bold text-xl text-gray-800 mb-2">Ayodhya Office</p>
            <p>
              Near Shanti Oil Mill, Housla Nagar Colony, Modha, Ayodhya Dham
              Uttar Pradesh - 224001
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
      <ToastContainer />
    </>
  );
};

export default Contact;
