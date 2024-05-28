import React from "react";
import Header from "../components/Header";
import About from "../components/About";

const page = () => {
  return (
    <div className="w-2/3 bg-white relative m-auto p-4">
      <Header />
      <About />
    </div>
  );
};

export default page;
