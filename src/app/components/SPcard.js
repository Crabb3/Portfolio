import React from "react";
import "./SPcard.css";
import Image from "next/image";
import Link from "next/link";

const SPcard = (props) => {
  const prop = props;
  return (
    <div className="relative min-w-60 w-72 h-96">
      <div className="card border-2 border-[#848] rounded-md">
        <div className="frontCard">
          <Image
            fill
            src={prop.ImageSrc}
            alt={prop.ImageSrc}
            objectFit="cover"
          />
          <h2 className="text-2xl px-2 bottom-0 right-0 absolute bg-gray-400/[0.7] text-black">
            {prop.Title}
          </h2>
        </div>
        <div className="backCard p-4 flex flex-col justify-between">
          <div>
            <h2 className="my-4 text-2xl font-bold flex justify-center">
              {prop.Title}
            </h2>
            <p>{prop.content}</p>
          </div>
          <div className="relative flex-col flex bottom-0 left-0">
            <div className="flex gap-4 justify-evenly">
              {prop.gh && (
                <Link
                  href={prop.gh}
                  className="border-2 border-[#848] rounded-full px-2 py-1 flex justify-center items-center"
                >
                  <Image
                    className="inline-block"
                    src="/icon/Github.svg"
                    alt={prop.gh}
                    width={20}
                    height={20}
                  />
                </Link>
              )}
              {prop.src && (
                <Link
                  href={prop.src}
                  className="border-2 border-[#848] rounded-full px-2 py-1 flex justify-center items-center"
                >
                  <Image
                    className="inline-block"
                    src="/icon/reactjs.svg"
                    alt={prop.src}
                    width={20}
                    height={20}
                  />
                </Link>
              )}
              {prop.yt && (
                <Link
                  href={prop.yt}
                  className="border-2 border-[#848] rounded-full px-2 py-1 flex justify-center items-center"
                >
                  <Image
                    className="inline-block"
                    src="/icon/youtube.svg"
                    alt={prop.yt}
                    width={20}
                    height={20}
                  />
                </Link>
              )}
            </div>
            <div className="text-md text-gray-500 mt-2">{prop.tag}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPcard;
