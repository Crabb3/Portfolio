import React from "react";

const About = () => {
  return (
    <div className="border-t-2 border-t-black p-4">
      <h2 className="text-4xl pl-5">關於我</h2>
      <p className="my-3 text-xl">
        我是Denny，目前就讀國立中正大學資工所碩二，從大學期間接觸到程式競賽後開始練習coding能力，興趣為學習一些進階演算法與網頁開發，碩士研究領域為量子網路與近似演算法
      </p>
      <h2 className="text-4xl pl-5">目前使用的語言與工具</h2>
      <ul className="my-3 text-xl">
        <li>C++</li>
        <li>Python</li>
        <li>Markdown</li>
        <li>Tailwind CSS</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Docker</li>
      </ul>
      <h2 className="text-4xl pl-5">曾經學習過的語言與工具</h2>
      <ul className="my-3 text-xl">
        <li>Golang</li>
        <li>PHP</li>
        <li>OpenCV</li>
        <li>C#</li>
        <li>MsSQL</li>
        <li>jQuery</li>
        <li>D3.js</li>
        <li>Chart.js</li>
        <li>Vercel</li>
        <li>Github Actions</li>
      </ul>
    </div>
  );
};

export default About;
