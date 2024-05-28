"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";

const Button = (props) => {
  const prop = props;
  const pathname = usePathname();
  return (
    <Link
      href={prop.src}
      className={clsx(
        "border-t-2 border-l-2 border-r-2 hover:bg-[#848] hover:text-white p-2 rounded-t-md",
        {
          "bg-[#848] text-white": pathname === prop.src,
          "border-black": pathname !== prop.src,
        }
      )}
    >
      <h2>{prop.name}</h2>
    </Link>
  );
};

export default Button;
