'use client'
import React, { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';

const commandMap = {
    "profile" : 'Name : Denny Hsu<br \>Age : 25<br \>'
};

function Cli() {
  const [lines, setLines] = useState(["Hi, I'm Denny, welcome to my website", "Type 'help' for more information."]); // CLI初始化提示符
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [res, setRes] = useState('')
  const typedRef = useRef(null);
  const typedEle = useRef(null);

  // 動態打字動畫（只動作在最新一行回應）
  useEffect(() => {
    if (!typing || res === '' || !typedEle.current) return;
    const typed = new Typed(typedEle.current, {
    strings: ['> ' + res],
    typeSpeed: 40,
    onComplete: () => {
        setTyping(false)
        var sp = res.split('<br \>')
        for(let i=0; i<sp.length; i++)
            setLines(prev => [...prev, sp[i]])
        setRes('')
    }});
    typedRef.current = typed;
    return () => typed.destroy();
  }, [typing, res]);

  // 處理命令輸入
  const handleInput = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setTyping(true); // 觸發打字動畫
      const word = input
      setLines(prev => [...prev, word]);
      setInput('');
      // 查詢指令回應
      setTimeout(() => {
        const output = commandMap[input] || `${input}: command not found`;
        setRes(output)
      }, 300);
    }
  };

  return (
    <div 
     style={{
      background: 'black', color: 'lime', fontFamily: 'monospace',
      padding: '1em', minHeight: '20em'
    }}>
      {lines.map((line, idx) => (
        <div class="flex w-full" key={idx}><span class="mr-2">&gt;</span><div class="w-full">{line}</div></div>
      ))}
      { <div class="inline" ref={typedEle}  /> }
      {!typing && <div class="w-full text-nowrap"><span class="mr-2">&gt;</span>
        <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInput}
            class="w-full"
            style={{
            background: 'black', color: 'lime', border: 'none',
            fontFamily: 'monospace', outline: 'none'
            }}
            autoFocus
            disabled={typing}
        />
      </div>}
    </div>
  );
}

export default Cli;