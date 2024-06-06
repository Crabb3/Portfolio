import React from "react";

const About = () => {
  return (
    <div className="border-t-2 border-t-[#848] p-4">
      <h2 className="text-4xl pl-5">關於我</h2>
      <ul className="my-3 text-md leading-10">
        <li>喜歡與他人分享/討論code，並試著優化程式碼</li>
        <li>喜歡學習新事物，在各個project使用不同的套件</li>
        <li>於大四參與LeetCode讀書會至今</li>
        <li>碩士：國立中正大學 資訊工程研究所</li>
        <li>學士：國立虎尾科技大學 資訊工程系</li>
        <li>
          Current LeetCode rating : 2080
          <h2 className="inline-block text-gray-400">
            (參加讀書會後就很少打了...)
          </h2>
        </li>
      </ul>
      <h2 className="text-4xl pl-5">目前使用的語言與工具</h2>
      <ul className="my-3 text-xl leading-9">
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
      <ul className="my-3 text-xl leading-9">
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
