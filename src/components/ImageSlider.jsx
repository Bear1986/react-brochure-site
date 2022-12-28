import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";
const ImageSlider = () => {
  const slides = [
    { id: 1, image: food1, title: "Fish in a Seafood & Spinage Sauce" },
    { id: 2, image: food2, title: "Spicy Punkin Soup" },
    { id: 3, image: food3, title: "Crumpets and Tea" },
    { id: 4, image: food4, title: "Fried Calamari" },
  ];
  const [current, setCurrent] = React.useState(0);
  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const index = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(index);
  };
  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const index = isLastSlide ? 0 : current + 1;
    setCurrent(index);
   };
   
   const goToSlide = (slideIndex) => {
      setCurrent(slideIndex);

   }

  return (
    <div className="max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-in-out"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      ></div>
      {/*left arrow*/}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={35} />
      </div>
      {/*left arrow*/}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={35} />
        </div>
        <div className="flex top-4 justify-center py-2">
           {slides.map((slide, slideIndex) => (
              <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                 <RxDotFilled size={20} />
              </div>             
))}
        
        </div>
    </div>
  );
};

export default ImageSlider;
