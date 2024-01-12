import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)

  let arrObj=[1,2,3,4,5]
  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="abhilash" post="trainee" myArr={arrObj}/> <br/>

    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
<Card username='Json' post="nojob"/> <br/>

<h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card/> <br/>

    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card/>   
    </>
  )
}

export default App
