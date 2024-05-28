import React from "react";
import HLCard from "../utils/HLCard";

const Highlight = () => {
  return (
    <div className="flex justify-evenly">
      <HLCard name="程式競賽" img="/Prog.jpg" util="#c++ #python" />
      <HLCard name="網頁開發" img="/Web.jpg" util="#react #next #express" />
    </div>
  );
};

export default Highlight;
