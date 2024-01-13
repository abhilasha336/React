import { useState } from 'react'

import './App.css'
import './index.css'

function App() {

  function changeColor(color){
    setColor(color)
  }
  const [color, setColor] = useState('olive');

  return (
  
  <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1'>
      <div className='fixed flex flex-wrap justify-center shadow-lg bg-black py-2 rounded-3xl' >

       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'
         onClick={()=>{changeColor('red')}}>  Red </button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500'
        onClick={()=>{setColor('green')}}>  Green </button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500'
        onClick={()=>{setColor('blue')}}>  Blue </button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500'
        onClick={()=>{setColor('purple')}}>  Purple </button>



      </div>
    </div>

  </div>

  )
}

export default App
