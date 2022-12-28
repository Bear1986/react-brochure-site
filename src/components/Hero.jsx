import React from 'react'
import heroImage from './images/hero.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screed'>
        <img
           className='top-0 left-0 w-full h-screen object-cover'
        src={heroImage}
        alt="Bodelwyddan Castle, close to the village of Bodelwyddan, near Rhyl, Denbighshire in Wales. It was built around 1460 by the Humphreys family of Anglesey as a manor house."
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
           <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
              <p>All Inclusive</p>
              <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'> Private Getaway </h1>
              <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl pt-4 pb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, eum!</p>
              <button className='bg-white text-black text-xl'>
                 Reserve Now
              </button>
           </div>
        </div>
    </div>
  );
}

export default Hero