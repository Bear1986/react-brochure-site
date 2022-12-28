import React from 'react'
import img1 from './images/img1.jpg'
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function Plan() {
  return (
    <div className="m-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/*left side grid*/}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={img1}
          alt="welsh flag"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={img2}
          alt="tea room"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={img3}
          alt="countryside"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={img4}
          alt="Saint Thomas Church"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={img5}
          alt="seaside"
        />
      </div>
      {/*right side grid*/}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Make Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          repellat, totam reprehenderit minus repudiandae adipisci illum quam
          eligendi assumenda, voluptatum maxime magnam consequatur iure quod
          ullam quas esse sequi aut?
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white hover:shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan