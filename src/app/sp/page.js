import React from "react";
import Header from "../components/Header";
import SPcard from "../components/SPcard";

const page = () => {
  return (
    <div className="w-2/3 bg-white relative m-auto p-4 flex flex-col">
      <Header />
      <div className="border-t-2 border-black"></div>
      <div className="flex gap-4 mt-4 justify-evenly flex-wrap">
        <SPcard
          src="https://tmhsu-0413.github.io/"
          Title="Link-in-bio website"
          gh="https://github.com/TMHsu-0413/TMHsu-0413.github.io"
          content="一頁式網站，搭配一些美化特效"
          ImageSrc="/spImage/Link_in_bio.jpg"
          tag="#react #vanta.js"
        />
        <SPcard
          src="https://tmhsu-0413.github.io/"
          Title="Link in bio"
          gh="https://github.com/TMHsu-0413/TMHsu-0413.github.io"
          content="一頁式網站，搭配一些美化特效"
          ImageSrc="/spImage/Link_in_bio.jpg"
          tag="#react #vanta.js"
        />
        <SPcard
          src="https://tmhsu-0413.github.io/"
          Title="Link in bio"
          gh="https://github.com/TMHsu-0413/TMHsu-0413.github.io"
          content="一頁式網站，搭配一些美化特效"
          ImageSrc="/spImage/Link_in_bio.jpg"
          tag="#react #vanta.js"
        />
      </div>
    </div>
  );
};

export default page;
