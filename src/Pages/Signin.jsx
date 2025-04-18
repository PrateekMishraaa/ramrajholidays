import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.Email) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Please enter a valid email address";
    }
    
    // Password validation
    if (!formData.Password) {
      newErrors.Password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await axios.post(
        "https://ramraj-backend.onrender.com/api/login",
        formData, 
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true 
        }
      );
      
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }

      toast.success("Login successful!");
      setLoading(false);
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
    } catch (error) {
      setLoading(false);
      
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Failed to login");
      } else {
        toast.error("Network error. Please try again later");
      }
      
      console.error("Login error:", error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <section className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <form className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Login</h2>
          <div className="grid grid-cols-1 gap-6">
            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-600 font-semibold" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                placeholder="Enter your email"
              />
              {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
            </div>
            
            {/* Password */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-600 font-semibold" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400"
                placeholder="Enter your password"
              />
              {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login"}
          </button>
          <p className="mt-4 text-center font-semibold font-sans">
            Don't have an Account? <a href="/signup" className="text-blue-700">SignUp</a>
          </p>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default Signin;