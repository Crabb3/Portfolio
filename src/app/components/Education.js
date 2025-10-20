"use client";
import React, { useEffect } from "react";
import "./Education.css";
const Education = () => {
  useEffect(() => {
    const element = document.querySelectorAll(".popout");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("animation");
      })
    });

    element.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      element.forEach((el) => {
        observer.unobserve(el);
      });
    };
  });
  return (
    <div className="p-4 flex flex-col items-center sm:items-center">
      <div className="text-4xl mb-8">求學經歷</div>

      <div className="lg:nthChild sm:my-4 lg:my-0 max-w-96 opacity-0 relative popout">
        <div className="border-2 border-[#828] p-3 rounded-xl flex flex-col gap-4">
          <p className="text-xl font-bold self-center">碩士二年級</p>
          <p className="text-sm text-gray-400">國立中正大學 資訊工程研究所</p>
          <ul className="text-grey break-words list-disc pl-4">
            <li>與中研院教授合作完成論文，研究領域為量子網路與近似演算法</li>
            <li>利用課餘時間製作Side Project，增進網頁開發技術</li>
            <li>撰寫解題筆記，將解題想法與技巧分享給其他人</li>
            <li>學習程式語言: Next.js、D3.js、Flask、Restful API</li>
          </ul>
        </div>
      </div>

      <div className="lg:nthChild sm:my-4 lg:my-0 max-w-96 opacity-0 relative popout">
        <div className="border-2 border-[#828] p-3 rounded-xl flex flex-col gap-4">
          <p className="text-xl font-bold self-center">碩士一年級</p>
          <p className="text-sm text-gray-400">國立中正大學 資訊工程研究所</p>
          <ul className="text-grey break-words list-disc pl-4">
            <li>擔任資料結構、物件導向程式設計助教 </li>
            <li>
              參與網頁開發課程，並用課餘時間製作Side Project，學習更多相關知識
            </li>
            <li>參與LeetCode Contest，並達到Rating 2000+</li>
            <li>
              學習程式語言與工具: React.js、Express.js、Docker、Github Actions
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:nthChild sm:my-4 lg:my-0 max-w-96 box opacity-0 popout">
        <div className="border-2 border-[#828] p-3 rounded-xl flex flex-col gap-4">
          <p className="text-xl font-bold self-center">大學四年級</p>
          <p className="text-sm text-gray-400">國立虎尾科技大學 資訊工程系</p>
          <ul className="text-grey break-words list-disc pl-4">
            <li>於中山科學研究院學年實習，維護及開發新網頁功能</li>
            <li>參與LeetCode讀書會，增進程式能力與溝通能力</li>
            <li>
              教學2名學生演算法實作細節，並帶領至獨立完成大部分LeetCode
              medium題目
            </li>
            <li>2021 ICPC for Technology Universities Bronze Award</li>
            <li>2021 ICPC Taiwan Honorble Mention</li>
            <li>2021 ICPC Taipei Rigional Honorble Mention</li>
            <li>學習程式語言與工具: C#、jQuery、MsSQL、Python</li>
          </ul>
        </div>
      </div>

      <div className="lg:nthChild sm:my-4 lg:my-0 max-w-96 box opacity-0 popout">
        <div className="border-2 border-[#828] p-3 rounded-xl flex flex-col gap-4">
          <p className="text-xl font-bold self-center">大學三年級</p>
          <p className="text-sm text-gray-400">國立虎尾科技大學 資訊工程系</p>
          <ul className="text-grey break-words list-disc pl-4">
            <li>精進程式能力，開始參加校內外程式競賽</li>
            <li>CPE 4題，排名(79/2394)</li>
            <li>校內競賽金獎(17屆Formosa程式競賽)</li>
            <li>2020 ICPC Taiwan Honorble Mention</li>
            <li>校內畢業專題競賽銅獎</li>
            <li>學習程式語言與工具: Python、OpenCV、TensorFlow</li>
          </ul>
        </div>
      </div>

      <div className="lg:nthChild sm:my-4 lg:my-0 max-w-96 box opacity-0 popout">
        <div className="border-2 border-[#828] p-3 rounded-xl flex flex-col gap-4">
          <p className="text-xl font-bold self-center">大學二年級</p>
          <p className="text-sm text-gray-400">國立虎尾科技大學 資訊工程系</p>
          <ul className="text-grey break-words list-disc pl-4">
            <li>因緣際會下接觸到了程式競賽，並開始練習演算法。</li>
            <li>加入實驗室與學長學習網頁開發技術。</li>
            <li>
              於學校網路組擔任工讀生，負責檢修網路，更換網路孔，設定路由器等等。
            </li>
            <li>學習程式語言與工具: C++、Vue2、CSS、JavaScript、Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
