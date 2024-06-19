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
      className="lg:max-w-72 lg:h-96 md:max-w-64 md:h-80 sm:max-w-72 sm:h-96 flex flex-col justify-between border-2 border-[#848] bg-[rgba(216,191,216)]/[.7] my-10 rounded-xl p-4"
    >
      <div className="self-center lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-64">
        <Image
          src={prop.img}
          width={500}
          height={500}
          alt=""
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="lg:w-52 md:w-40 sm:w-52 text-xl self-center text-[#4b0082] flex justify-center font-bold border-[#848] border-2 rounded-full p-2 my-2">
          {prop.name}
        </div>
        <div className="p-2 text-md text-gray-600 justify-self-end">
          {prop.util}
        </div>
      </div>
    </div>
  );
};

export default HLCard;
