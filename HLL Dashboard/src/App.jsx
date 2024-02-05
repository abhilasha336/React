import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavDashBoard from './components/NavDashBoard'
import Footer from './components/Footer'
import Calendar from './components/Calendar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full max-h-svh ">
      <NavDashBoard/>
      <Calendar/>
      <Footer/>

    </div>
    </>
  )
}

export default App