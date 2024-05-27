import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex border-2 border-zinc-700 rounded p-3">
      <div className="w-1/2 flex justify-center">
        <Image
          src="/Profile_photo.jpg"
          width={300}
          height={300}
          alt="ProfilePhoto"
          className="rounded-full"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
        <p className="text-3xl mt-4">Tang-Ming Hsu (許唐銘)</p>
        <div className="flex gap-2">
          <a href="https://github.com/TMHsu-0413">
            <Image
              src="/icon/Github.svg"
              alt="github icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.linkedin.com/in/denny-hsu-583909241/">
            <Image
              src="/icon/LinkedIN.svg"
              alt="linkedin icon"
              width={50}
              height={50}
            />
          </a>
          <a href="https://leetcode.com/u/TMHsu/">
            <Image
              src="/icon/leetcode.png"
              alt="leetcode icon"
              width={50}
              height={50}
            />
          </a>
          <a href="mailto:denny890413@gmail.com">
            <Image
              src="/icon/Gmail.svg"
              alt="gmail icon"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
