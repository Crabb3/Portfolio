import React from "react";
import HLCard from "../utils/HLCard";

const Highlight = () => {
  return (
    <div className="flex justify-evenly md:flex-row sm:flex-col sm:items-center">
      <HLCard name="程式競賽" img="/Prog.png" util="#c++ #python" />
      <HLCard name="網頁開發" img="/Web.png" util="#react #next #express" />
    </div>
  );
};

export default Highlight;
