import React from 'react'
import Navbar from '../Components/Navbar'
import Rammandir from '../assets/mandir.webp';
import Footer from '../Components/Footer';
import Trail from "../assets/trail2.webp"
import Trail2 from "../assets/trail3.webp"
import Trail3 from "../assets/trail4.webp"
const Package = () => {
  // Sample package data - you can replace with your actual data
  const packages = [
    <img src={Rammandir} alt="" />,
    {
      id: 2,
      title: "Complete Ramayana Trail",
      duration: "10 Days / 9 Nights",
      price: "₹45,999",
      description: "Follow the complete journey of Lord Ram during his exile period",
      highlights: ["Ayodhya", "Chitrakoot", "Panchavati", "Kishkindha", "Rameshwaram"]
    },
    {
      id: 3,
      title: "Lanka Expedition",
      duration: "5 Days / 4 Nights",
      price: "₹32,999",
      description: "Explore the ancient sites of Sri Lanka connected to the Ramayana",
      highlights: ["Ashok Vatika", "Vibhishan Temple", "Ramayana Trail", "Cultural Program"]
    },
    {
      id: 4,
      title: "Spiritual Ramayana Journey",
      duration: "7 Days / 6 Nights",
      price: "₹38,999",
      description: "Experience the spiritual aspects of Lord Ram's journey with expert guides",
      highlights: ["Meditation Sessions", "Temple Visits", "Spiritual Discourses", "Traditional Food"]
    },
    {
      id: 5,
      title: "Spiritual Ramayana Journey",
      duration: "7 Days / 6 Nights",
      price: "₹38,999",
      description: "Experience the spiritual aspects of Lord Ram's journey with expert guides",
      highlights: ["Meditation Sessions", "Temple Visits", "Spiritual Discourses", "Traditional Food"]
    },
    {
      id: 6,
      title: "Spiritual Ramayana Journey",
      duration: "7 Days / 6 Nights",
      price: "₹38,999",
      description: "Experience the spiritual aspects of Lord Ram's journey with expert guides",
      highlights: ["Meditation Sessions", "Temple Visits", "Spiritual Discourses", "Traditional Food"]
    }
  ];

  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-60 md:h-64 lg:h-80 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Rammandir})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-400 font-sans">
              Ramayan <span className='text-white'>Packages</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 my-4 rounded-full"></div>
            <p className="text-lg font-medium mb-2">Explore Ramayana Trail With Us</p>
            <p className="text-sm">
              <span className="text-white">Home</span> <span className="mx-1">›</span>{' '}
              <span className="text-orange-400">Packages</span>
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      {/* Ramayana Trail Package Cards */}
<div className="w-11/12 lg:w-4/5 mx-auto my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="relative h-64 md:h-72 lg:h-80 ">
      <img
        src={Rammandir}
        alt="Ramayana Trail India"
        className="w-full h-full object-cover cursor-pointer hover:scale-x-125 transition"
      />
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
        30% OFF
      </span>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-3">
        <h3 className="text-white text-lg md:text-xl font-bold">
          Ramayana Trail
        </h3>
        <p className="text-white text-sm">12 Night/13 Days</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Ramayana Trail (India)
      </h2>
      <div className="flex items-center mb-3">
        <div className="text-yellow-400 text-sm">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        The Ramayana Trail Yatra is a pilgrimage journey that traces the
        footsteps of Lord Rama, his consort Sita, and his devoted brother
        Lakshmana as described in the ancient Hindu epic, the Ramayana.
      </p>
      <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-green-600">📍</span> PACKAGE LOCATIONS
      </h3>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {["Ayodhya", "Prayagraj", "Chitrakoot", "Nashik", "Hampi", "Rameshwaram"].map((location, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {location}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Book Now
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-gray-900 font-bold transition">
          View Package
        </button>
      </div>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="relative h-64 md:h-72 lg:h-80">
      <img
        src={Trail}
        alt="Ramayana Trail India"
        className="w-full h-full object-cover cursor-pointer hover:scale-x-125 transition"
      />
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
        30% OFF
      </span>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-3">
        <h3 className="text-white text-lg md:text-xl font-bold">
          Ramayana Trail (India)
        </h3>
        <p className="text-white text-sm">12 Night/13 Days</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
      Ramayana Trail (Nepal)
      </h2>
      <div className="flex items-center mb-3">
        <div className="text-yellow-400 text-sm">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        The Ramayana Trail Yatra is a pilgrimage journey that traces the
        footsteps of Lord Rama, his consort Sita, and his devoted brother
        Lakshmana as described in the ancient Hindu epic, the Ramayana.
      </p>
      <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-green-600">📍</span> PACKAGE LOCATIONS
      </h3>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {["Ayodhya", "Prayagraj", "Chitrakoot", "Nashik", "Hampi", "Rameshwaram"].map((location, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {location}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Book Now
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-gray-900 font-bold transition">
          View Package
        </button>
      </div>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="relative h-64 md:h-72 lg:h-80">
      <img
        src={Trail2}
        alt="Ramayana Trail India"
        className="w-full h-full object-cover cursor-pointer hover:scale-x-125 transition"
      />
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
        30% OFF
      </span>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-3">
        <h3 className="text-white text-lg md:text-xl font-bold">
        Ramayana Trail (Sri Lanka)
        </h3>
        <p className="text-white text-sm">12 Night/13 Days</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Ramayana Trail (India)
      </h2>
      <div className="flex items-center mb-3">
        <div className="text-yellow-400 text-sm">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        The Ramayana Trail Yatra is a pilgrimage journey that traces the
        footsteps of Lord Rama, his consort Sita, and his devoted brother
        Lakshmana as described in the ancient Hindu epic, the Ramayana.
      </p>
      <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-green-600">📍</span> PACKAGE LOCATIONS
      </h3>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {["Ayodhya", "Prayagraj", "Chitrakoot", "Nashik", "Hampi", "Rameshwaram"].map((location, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {location}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Book Now
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-gray-900 font-bold transition">
          View Package
        </button>
      </div>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="relative h-64 md:h-72 lg:h-80">
      <img
        src={Trail3}
        alt="Ramayana Trail India"
        className="w-full h-full object-cover cursor-pointer hover:scale-x-125 transition"
      />
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
        30% OFF
      </span>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-3">
        <h3 className="text-white text-lg md:text-xl font-bold">
          Ramayana Trail 
        </h3>
        <p className="text-white text-sm">12 Night/13 Days</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Ramayana Trail (India)
      </h2>
      <div className="flex items-center mb-3">
        <div className="text-yellow-400 text-sm">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        The Ramayana Trail Yatra is a pilgrimage journey that traces the
        footsteps of Lord Rama, his consort Sita, and his devoted brother
        Lakshmana as described in the ancient Hindu epic, the Ramayana.
      </p>
      <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-green-600">📍</span> PACKAGE LOCATIONS
      </h3>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {["Ayodhya", "Prayagraj", "Chitrakoot", "Nashik", "Hampi", "Rameshwaram"].map((location, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {location}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Book Now
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-gray-900 font-bold transition">
          View Package
        </button>
      </div>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="relative h-64 md:h-72 lg:h-80">
      <img
        src={Trail}
        alt="Ramayana Trail India"
        className="w-full h-full object-cover cursor-pointer hover:scale-x-125 transition"
      />
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
        30% OFF
      </span>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-3">
        <h3 className="text-white text-lg md:text-xl font-bold">
          Ramayana Trail (India)
        </h3>
        <p className="text-white text-sm">12 Night/13 Days</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Ramayana Trail (India)
      </h2>
      <div className="flex items-center mb-3">
        <div className="text-yellow-400 text-sm">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        The Ramayana Trail Yatra is a pilgrimage journey that traces the
        footsteps of Lord Rama, his consort Sita, and his devoted brother
        Lakshmana as described in the ancient Hindu epic, the Ramayana.
      </p>
      <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-green-600">📍</span> PACKAGE LOCATIONS
      </h3>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {["Ayodhya", "Prayagraj", "Chitrakoot", "Nashik", "Hampi", "Rameshwaram"].map((location, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {location}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Book Now
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-gray-900 font-bold transition">
          View Package
        </button>
      </div>
    </div>
  </div>
  <div className="bg-white shadow-lg rounded-xl overflow-hidden">
    <div className="relative h-64 md:h-72 lg:h-80">
      <img
        src={Trail2}
        alt="Ramayana Trail India"
        className="w-full h-full object-cover cursor-pointer hover:scale-x-125 transition"
      />
      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
        30% OFF
      </span>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-3">
        <h3 className="text-white text-lg md:text-xl font-bold">
          Ramayana Trail (India)
        </h3>
        <p className="text-white text-sm">12 Night/13 Days</p>
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Ramayana Trail (India)
      </h2>
      <div className="flex items-center mb-3">
        <div className="text-yellow-400 text-sm">
          ★★★★☆
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        The Ramayana Trail Yatra is a pilgrimage journey that traces the
        footsteps of Lord Rama, his consort Sita, and his devoted brother
        Lakshmana as described in the ancient Hindu epic, the Ramayana.
      </p>
      <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-green-600">📍</span> PACKAGE LOCATIONS
      </h3>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {["Ayodhya", "Prayagraj", "Chitrakoot", "Nashik", "Hampi", "Rameshwaram"].map((location, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {location}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
          Book Now
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-gray-900 font-bold transition">
          View Package
        </button>
      </div>
    </div>
  </div>

  {/* You can copy and paste this card block to add more similar packages */}
</div>
        <Footer/>
    </>
  )
}

export default Package
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Package = () => {
//   const [data,setData] = useState([])
  

//   useEffect(()=>{
//       const fetchData = async()=>{
//           try{
//               const response = await axios.get("https://fakestoreapi.com/products/")
//               console.log(response.data)
//               setData(response.data)
//           }catch(error){
//             console.log(error)
//           }
//       }
//       fetchData()
//   },[])
//   return (
//     <div>
//       <p>Data</p>
//     {
//       data.map((item,index)=>(
//         <div key={index}>
//           <div>{item.title}</div>
//           <img src={item.image} alt="" />
//         </div>
//       ))
//     }
//     </div>
//   )
// }

// export default Package
