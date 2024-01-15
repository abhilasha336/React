import { useState,useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isSymbolAllowed, setSymbolAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const passwordRef=useRef(null)

  const generatePassword=useCallback(()=>{
    let pass=""
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(isNumberAllowed)str+='0123456789'
    if(isSymbolAllowed)str+='!@#$%^&*%&^$!@#$#'
    for (let i=1;i<length;i++){
      const charIndex=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(charIndex)
    }
    setPassword(pass)
  },[length,isSymbolAllowed,isNumberAllowed])


  useEffect(()=>{
    generatePassword()
  },[length,isNumberAllowed,isSymbolAllowed])

  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  function createRender(rootContainer){

     const reactElement=document.createElement('div')
     reactElement.innerHTML=password
     rootContainer.appendChild(reactElement)
  
  }
  const special=document.querySelector('.special')
  return (
    <>
      <div className='w-full max-w-xl mx-auto my-4 shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-800'>
        <h1 className='text-white items-center text-center my-3'>Password Generator</h1>
        <div className='flex items-center gap-x-1'>
          <input
            type='text'
            className='outline-none w-full py-1 px-3 rounded-lg'
            value={password}
            readOnly
            placeholder='Password'
            ref={passwordRef}
          />
          <button className='outline-none py-1 rounded-lg px-5 bg-blue-600 text-white'
           onClick={copyPassword}>Copy</button>
           <button className='outline-none py-1 rounded-lg px-5 bg-blue-600 text-white'
           onClick={()=>{createRender(special)}}>Add</button>
        </div>
        <div className='flex text-sm items-center gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              className='cursor-pointer my-2 bg-blue-600'
              onChange={(e) => setLength(e.target.value)}
              max={100}
              min={3}
              value={length}
            />
            <label className='py-2'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={isNumberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='number' className='py-2'>
              Number allowed
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={isSymbolAllowed}
              onChange={() => setSymbolAllowed((prev) => !prev)}
            />
            <label htmlFor='symbol' className='py-2'>
              Symbol allowed
            </label>
          </div>
        </div>
      </div>
      <div  className='w-full max-w-xl mx-auto my-4 shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-800 special by-white'></div>
    </>
  );
}

export default App;
