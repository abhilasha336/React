import React from 'react'
import {Link} from 'react-router-dom'

  function Footer() {
  return (
          <div className="h-[5vh] bg-black w-full max-w-screen-xl p-4 py-6  ">
                           {/* <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center">
                      © 2024
                      <a href="" className="hover:underline">
                          HLL Limited
                      </a>
                      . All Rights Reserved.
                  </span>

              </div> */}
              <div className='text-center text-white text-sm'>
              © 2024  HLL Limited. All Rights Reserved.
              </div>

          </div>
  );
}


export default Footer