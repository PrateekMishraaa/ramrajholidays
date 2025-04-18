import React from 'react'
import Navbar from '../Components/Navbar'
import Rammandir from '../assets/mandir.webp';
import KedarNath from "../assets/kedarnath.webp";
import KedarNathh from "../assets/kedarnath2.webp"
import Footer from '../Components/Footer';
const CharDham = () => {
  return (
    <>
 <Navbar/>
  <section className="relative h-60 md:h-64 lg:h-80 w-full">
         <div
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${Rammandir})` }}
         >
           <div className="h-full w-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4 text-center">
             <h1 className="text-4xl md:text-4xl font-bold text-white  font-sans">
               Chardham 
             </h1>
             <div className="h-1 w-24 bg-orange-500 my-4 rounded-full"></div>
             <p className="text-lg font-medium mb-2">Explore Ramayana Trail With Us</p>
             <p className="text-sm">
               <span className="text-white">Home</span> <span className="mx-1">›</span>{' '}
               <span className="text-orange-400">Chardham</span>
             </p>
           </div>
         </div>
       </section>
    <div className='h-[50vh] w-full  flex justify-between gap-10'>
      <div className='h-full w-[50%]'>
        <img src={KedarNath} alt="" className='h-full w-full' />
      </div>
      <div className='h-full w-[50%]'>
        <img src={KedarNathh} alt="" className='h-full w-full' />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CharDham
