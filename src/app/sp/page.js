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
          Title="Link-in-bio"
          gh="https://github.com/TMHsu-0413/TMHsu-0413.github.io"
          content="一頁式網站，包含簡單的個人簡介，搭配一些美化特效"
          ImageSrc="/spImage/Link_in_bio.jpg"
          tag="#react.js #vanta.js #tailwindCSS"
        />
        <SPcard
          src="https://graph-visualizer-three.vercel.app/graph"
          Title="Graph Visualizer"
          gh="https://github.com/TMHsu-0413/Graph-Visualizer"
          content="可根據LeetCode題目為Graph或Tree選擇，並動態產生出視覺化圖行，以便debug使用"
          ImageSrc="/spImage/Graph_visual.jpg"
          tag="#next.js #d3.js #tailwindCSS"
        />
        <SPcard
          Title="Anonymous Chatroom"
          gh="https://github.com/TMHsu-0413/CCU_web_hw5"
          yt="https://youtu.be/897qX4mINIk"
          content="免登入匿名聊天室，提供一對一與公開區域，可以傳送系統預設貼圖或圖片，並有語音及視訊功能"
          ImageSrc="/spImage/Chatroom.jpg"
          tag="#react.js #express.js #socket.io"
        />
        <SPcard
          Title="Weather Forecast"
          gh="https://github.com/TMHsu-0413/CCU_web_hw4"
          yt="https://youtu.be/zMlGZl0fOxc"
          content="天氣查詢系統，根據使用者查詢位置回傳當地天氣狀況，可以選擇查詢後是否寄到信箱"
          ImageSrc="/spImage/Weather.jpg"
          tag="#react.js #PHP #axios #MySQL"
        />
        <SPcard
          Title="Blog Life"
          gh="https://github.com/TMHsu-0413/CCU_web_hw3"
          yt="https://youtu.be/BmyGGveNl6w"
          content="模擬部落格，包含登入驗證，CRUD功能，並動態抓取最新的前3筆文章顯示在主頁面"
          ImageSrc="/spImage/Blog.jpg"
          tag="#react.js #PHP #Bootstrap #MySQL #Docker"
        />
        <SPcard
          Title="Calculator"
          gh="https://github.com/TMHsu-0413/CCU_web_hw2"
          yt="https://youtu.be/M9k6Oa0hBTI"
          content="計算機與亂數骰子，練習React Hooks，Ex. useState useReducer useContext"
          ImageSrc="/spImage/Calculator.jpg"
          tag="#react.js"
        />
      </div>
    </div>
  );
};

export default page;
