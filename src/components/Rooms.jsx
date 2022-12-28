import React from "react";
import rooms1 from "./images/rooms1.jpg";
import rooms2 from "./images/rooms2.jpg";
import rooms3 from "./images/rooms3.jpg";

function Rooms() {
  return (
    <div className="max-w-[1300px] h-[400px] bg-green-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Comfortable Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          necessitatibus, earum corrupti vitae minus commodi omnis! Aliquid
          officia rerum, sunt alias consequatur ipsa aspernatur voluptatibus
          fugit dolore quae, provident ut.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={rooms1} alt="spacious room" />
        <img className="row-span-2 object-contain  w-full h-full" src={rooms2} alt="walks nearby" />
        <img className="object-cover w-full h-full" src={rooms3} alt="spacious room with amenities" />
      </div>
    </div>
  );
}

export default Rooms;
