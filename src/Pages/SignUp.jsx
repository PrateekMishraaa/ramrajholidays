import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        Address: "",
        Password: "",
        ConfirmPassword: ""
    });
    
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        // First name validation
        if (!formData.FirstName.trim()) {
            newErrors.FirstName = "First name is required";
        }
        
        // Last name validation
        if (!formData.LastName.trim()) {
            newErrors.LastName = "Last name is required";
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.Email.trim()) {
            newErrors.Email = "Email is required";
        } else if (!emailRegex.test(formData.Email)) {
            newErrors.Email = "Please enter a valid email address";
        }
        
        // Mobile validation
        const phoneRegex = /^\d{10}$/;
        if (!formData.Mobile.trim()) {
            newErrors.Mobile = "Mobile number is required";
        } else if (!phoneRegex.test(formData.Mobile)) {
            newErrors.Mobile = "Please enter a valid 10-digit mobile number";
        }
        
        // Address validation
        if (!formData.Address.trim()) {
            newErrors.Address = "Address is required";
        }
        
        // Password validation
        if (!formData.Password) {
            newErrors.Password = "Password is required";
        } else if (formData.Password.length < 8) {
            newErrors.Password = "Password must be at least 8 characters";
        }
        
        // Confirm password validation
        if (formData.Password !== formData.ConfirmPassword) {
            newErrors.ConfirmPassword = "Passwords do not match";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            toast.error("Please fix the errors in the form");
            return;
        }
        
        setLoading(true);

        // Remove confirmPassword before sending to API
        const { ConfirmPassword, ...dataToSend } = formData;

        try {
            const response = await axios.post(
                "http://localhost:5000/api/signup",
                dataToSend, 
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true // For secure HTTP-only cookies
                }
            );
                
            // Save the token to localStorage if using that auth strategy
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }

            toast.success("Registration successful!");
            setLoading(false);
            
            // Redirect to dashboard or login page after successful signup
            setTimeout(() => {
                navigate("/signin");
            }, 2000);
            
        } catch (error) {
            setLoading(false);
            
            // Handle specific error messages from the backend
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || "Failed to sign up");
            } else {
                toast.error("Network error. Please try again later");
            }
            
            console.error("Signup error:", error);
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <section className="min-h-screen w-full flex items-center justify-center bg-gray-100 py-8">
                <form className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl w-full max-w-2xl mx-4" onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Create an Account</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="firstname">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="firstname" 
                                name="FirstName"
                                value={formData.FirstName}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.FirstName ? "border-red-500" : ""
                                }`}
                                placeholder="Enter your first name"
                            />
                            {errors.FirstName && (
                                <p className="text-red-500 text-sm mt-1">{errors.FirstName}</p>
                            )}
                        </div>
                        
                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="lastname">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="lastname" 
                                name="LastName"
                                value={formData.LastName}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.LastName ? "border-red-500" : ""
                                }`}
                                placeholder="Enter your last name"
                            />
                            {errors.LastName && (
                                <p className="text-red-500 text-sm mt-1">{errors.LastName}</p>
                            )}
                        </div>
                        
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="email">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.Email ? "border-red-500" : ""
                                }`}
                                placeholder="Enter your email"
                            />
                            {errors.Email && (
                                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
                            )}
                        </div>
                        
                        {/* Mobile */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="mobile">
                                Mobile <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="tel" 
                                id="mobile" 
                                name="Mobile"
                                value={formData.Mobile}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.Mobile ? "border-red-500" : ""
                                }`}
                                placeholder="Enter your mobile number"
                            />
                            {errors.Mobile && (
                                <p className="text-red-500 text-sm mt-1">{errors.Mobile}</p>
                            )}
                        </div>
                        
                        {/* Address */}
                        <div className="flex flex-col md:col-span-2">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="address">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="address" 
                                name="Address"
                                value={formData.Address}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.Address ? "border-red-500" : ""
                                }`}
                                placeholder="Enter your address"
                            />
                            {errors.Address && (
                                <p className="text-red-500 text-sm mt-1">{errors.Address}</p>
                            )}
                        </div>
                        
                        {/* Password */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="password">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="Password"
                                value={formData.Password}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.Password ? "border-red-500" : ""
                                }`}
                                placeholder="Create a password"
                                autoComplete="new-password"
                            />
                            {errors.Password && (
                                <p className="text-red-500 text-sm mt-1">{errors.Password}</p>
                            )}
                        </div>
                        
                        {/* Confirm Password */}
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-semibold" htmlFor="confirmPassword">
                                Confirm Password <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="ConfirmPassword"
                                value={formData.ConfirmPassword}
                                onChange={handleChange}
                                className={`border-2 rounded-lg p-3 focus:outline-none focus:border-orange-400 ${
                                    errors.ConfirmPassword ? "border-red-500" : ""
                                }`}
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                            />
                            {errors.ConfirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.ConfirmPassword}</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className={`mt-8 w-full font-bold py-3 rounded-lg transition-colors ${
                            loading 
                                ? "bg-gray-400 cursor-not-allowed" 
                                : "bg-orange-500 hover:bg-orange-600 text-white"
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                    
                    <p className="text-center mt-4 font-medium">
                        Already have an account? <a href="/signin" className="text-blue-600 hover:text-blue-800">Sign In</a>
                    </p>
                </form>
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default SignUp;