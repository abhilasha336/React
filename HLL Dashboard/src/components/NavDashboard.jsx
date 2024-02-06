import React, { useCallback } from 'react'
import { useState,useEffect,useLoadData } from 'react';

function NavDashBoard() {

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [])


  return (
    <div className='w-full h-[10vh]   bg-black'>
        {/* <div className='w-[8rem]  bg-cover bg-[url("https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/04/HLL-Logo-1.png")]'>
        </div>
        <p className='text-center text-2xl mx-auto my-3 text-white'>Welcome Dashboard</p>
        <div className='text-center justify-right text-white rounded  my-3'>{currentDate}</div>
        <div className='text-center justify-right mx-2 text-white rounded my-3'>{currentTime}</div> */}
        <ul className='w-full flex  items-center'>
          <li className='flex-2 w-[92px] h-[56px] bg-cover  bg-[url("https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/04/HLL-Logo-1.png")]'></li>
          <li className='flex-1 text-center text-white '>Welcome Dashboard</li>
          <li className='flex-2 mx-1 text-white'>{currentDate}</li>
          <li className='flex-2 text-white'>{currentTime}</li>
        </ul>
    </div>
  )
}

export default NavDashBoard