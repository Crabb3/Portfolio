import React from "react";
import HLCard from "../utils/HLCard";

const Highlight = () => {
  return (
    <div className="flex justify-evenly">
      <HLCard name="程式競賽" img="/Profile_photo.jpg" util="#c++ #python" />
      <HLCard name="網頁開發" img="" util="#react #next #express" />
    </div>
  );
};

export default Highlight;
