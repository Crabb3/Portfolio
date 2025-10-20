'use client'
import React, { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';
import "./Cli.css";

const commandMap = {
    "help" : [
        '"profile" --> My profile',
        '"education" --> My education journey',
        '"cls" --> clear monitor'
    ],
    "profile" : [
        'Name : Denny Hsu',
        'Year of birth : 2000',
        'Email : denny890413@gmail.com',
        'Github : @Crabb3',
        'LeetCode : @TMHsu'
    ],
    "education": [
        'Master : National Chung Cheng University - Computer Science',
        'Bachelor : National Formosa University - Computer Science'
    ],
    "test": [
        '1','2','3','4','5','6','7','8','9','1','2','3','4','5'
    ]
};

function Cli() {
  const [lines, setLines] = useState(["Hi, I'm Denny, welcome to my website", "Type 'help' for more information."]); // CLI初始化提示符
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [res, setRes] = useState('')
  const typedRef = useRef(null);
  const typedEle = useRef(null);
  const cliRef = useRef()


  const printerEffectHtml = (arr) => {
    let words = [...arr]
    let divHeader = '<div class="inline w-full"> <span class="mr-2">&gt;</span>'
    let divFooter = '</div><div></div>'
    for(let i=0; i<words.length; i++)
        words[i] = divHeader + words[i] + divFooter
    return words.join('')
  }

  const scrollToBottom = (() => {
    if (cliRef.current){
        cliRef.current.scrollTop = cliRef.current.scrollHeight
    }
  })

  // 動態打字動畫（只動作在最新一行回應）
  useEffect(() => {
    if (!typing || res === '' || !typedEle.current) return;
    var newWords = printerEffectHtml(res)
    let scrollDetector = null
    const typed = new Typed(typedEle.current, {
    strings: [newWords],
    typeSpeed: 0,
    onBegin: () => {
        scrollDetector = setInterval(scrollToBottom,100)
    },
    onComplete: () => {
        setTyping(false)
        for(let i=0; i<res.length; i++){
            setLines(prev => [...prev, res[i]])
        }
        setRes('')
        clearInterval(scrollDetector)
    }});
    typedRef.current = typed;
    return () => typed.destroy();
  }, [typing, res]);

  // 處理命令輸入
  const handleInput = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const word = input
      if (word === "cls"){
        setLines([])
        setInput('');
        return;
      }
      setTyping(true); // 觸發打字動畫
      setLines(prev => [...prev, word]);
      setInput('');
      // 查詢指令回應
      setTimeout(() => {
        const output = commandMap[input] || [`${input}: command not found`];
        setRes(output)
      }, 300);
    }
  };

  return (
    <div 
      class="bg-black font-mono text-lime-400 p-5 w-full min-h-[500px] max-h-[500px] overflow-auto custom-scrollbar"
      ref={cliRef}
    >
      {lines.map((line, idx) => (
        <div class="flex w-full" key={idx}>
            <span class="mr-2">
                &gt;
            </span>
        <div class="w-full">{line}</div></div>
      ))}
      { <div class="inline" ref={typedEle}  /> }
      {!typing && <div class="w-full text-nowrap"><span class="mr-2">&gt;</span>
        <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInput}
            class="w-full bg-black font-mono text-lime-400 bottom-0 outline-none"
            autoFocus
            disabled={typing}
        />
      </div>}
    </div>
  );
}

export default Cli;