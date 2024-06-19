import React from "react";

const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-8 text-4xl">工作經歷</div>

      <div className="border-[#828] border-2 rounded-xl px-8 py-5 justify-between flex flex-col">
        <text className="text-xl font-bold">
          國家中山科學研究院 前後端實習生
        </text>
        <text className="text-sm text-gray-400">
          2022/09 - 2023/06 (大四學年實習)
        </text>
        <ul className="list-disc">
          <li>維護舊有專案，提升讀取資料速度約20%</li>
          <li>設計更人性化的排班系統頁面</li>
        </ul>

        <text className="text-sm text-gray-400">
          使用工具：jQuery C# MsSQL winform
        </text>
      </div>
    </div>
  );
};

export default Work;
