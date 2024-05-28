import React from "react";
import "./SPcard.css";
import Image from "next/image";
import Link from "next/link";

const SPcard = (props) => {
  const prop = props;
  return (
    <div className="relative w-72 h-96">
      <div className="card border-2 border-[#848] rounded-md">
        <div className="frontCard">
          <Image fill src={prop.ImageSrc} alt={prop.ImageSrc} />
          <h2 className="text-2xl px-2 bottom-0 right-0 absolute bg-gray-400/[0.7] text-black">
            {prop.Title}
          </h2>
        </div>
        <div className="backCard p-4 flex flex-col">
          <p>{prop.content}</p>
          <p>{prop.content}</p>
          <p>{prop.content}</p>
          <p>{prop.content}</p>
          <p>{prop.content}</p>
          <p>{prop.content}</p>
          <div className="flex justify-evenly justify-self-end">
            {prop.gh && <button>GitHub</button>}
            {prop.src && <Link href={prop.src}>LiveDemo</Link>}
            {prop.yt && <button>YT</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPcard;
