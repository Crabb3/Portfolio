"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const HLCard = (props) => {
  const prop = props;
  const tilt = useRef();
  useEffect(() => {
    VanillaTilt.init(tilt.current, {
      scale: 1.1,
      max: 20,
      speed: 400,
    });
  });

  return (
    <div
      ref={tilt}
      className="w-72 h-96 flex flex-col border-2 border-[#848] bg-white my-10 rounded-xl p-4"
    >
      <Image
        src={prop.img}
        width={300}
        height={300}
        alt={prop.img}
        className="w-auto h-56 object-fill"
      />
      <div className="w-52 text-xl self-center flex justify-center font-bold border-[#848] border-2 rounded-full p-2 my-2">
        {prop.name}
      </div>
      <div className="p-2 text-sm text-gray-400 justify-self-end">
        {prop.util}
      </div>
    </div>
  );
};

export default HLCard;
