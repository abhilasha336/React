import React from 'react'
import {Link} from 'react-router-dom'

  function Footer() {
  return (
          <div className="mx-auto bg-black w-full max-w-screen-xl p-4 py-6  ">
                           <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center">
                      © 2024
                      <a href="" className="hover:underline">
                          HLL Limited
                      </a>
                      . All Rights Reserved.
                  </span>

              </div>
          </div>
  );
}


export default Footer