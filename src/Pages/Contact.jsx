import React from 'react';
import Navbar from '../Components/Navbar';
import Nature from '../assets/nature.jpg'; 
import Map from "../assets/map2.png"
import Footer from '../Components/Footer';
import CloudBackground from '../Components/CloudBackground';

const Contact = () => {

  return (
    <>
      <Navbar />
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${Nature})` }}
      >
      <div className='h-[70%] w-[70%]  absolute top-40 left-40 flex justify-between gap-4'>
        <div>
          <img src={Map} alt="" className=' cursor-pointer' />
        </div>
        <div className='h-[full] w-[50%] bg-white'>
          <p className='text-gray-800 font-serif font-semibold text-3xl p-10'>Share Your Query</p>
          <input type="text" placeholder='Your Name...' name="YourName" className='h-10 w-full border-1 hover:border-orange-600 transition rounded-xl p-4' />
          <div className='flex justify-between gap-4'>
          <input type="email" placeholder='Your Email...' name='YourEmail' className='h-10 w-[50%] border-1 hover:border-orange-600 transition rounded-xl mt-4 px-4' />
          <input type="email" placeholder='Your Email...' name='YourEmail' className='h-10 w-[50%] border-1 hover:border-orange-600 transition rounded-xl mt-4 px-6' />
          </div>
          <textarea name="" id="" placeholder='Your Message' className='h-[30%] w-[100%] border-1 hover:border-orange-600 transition rounded-xl mt-4 px-6'/>
          <button className='h-12 cursor-pointer text-2xl font-semibold   w-full bg-orange-500 text-white'>Send Message</button>
        </div>
      </div>
     
      </div>
      <div className='h-[90vh] w-full relative'>
        <p className='text-4xl font-semibold text-[#ea8b0f] absolute left-[40%] top-10 font-serif'>Contact Us</p>
        <div className='h-[60%] w-[80%]  absolute top-28 left-40 flex justify-between'>
          <div>
            <p className='font-bold text-xl text-gray-800 '>Head Office Address</p>
            <p className='w-96 mt-2 '>110,111, Unitech Commercial Tower, 2, Block B,
            Greenwood City, Sector 45, Gurugram, Haryana 122003</p>
          </div>
          <div>
            <p className='font-bold text-xl text-gray-800 '>Ayodhya Office</p>
            <p className='w-96 mt-2'>Near Shanti Oil Mill, Housla Nagar Colony, Modha,
            Ayodhya Dham Uttar Pradesh - 224001</p>
          </div>
          <div>
            <p className='font-bold text-xl text-gray-800 '>CONTACT INFO</p>
            <p className='w-96 mt-2'>Phone: +91 9318473156<br/>
Mobile: +91 9971834101
Email: india@ramrajholidays.in</p>
          </div>
        </div>
      </div>
      <CloudBackground/>
      <Footer/>
    </>
  );
};

export default Contact;
