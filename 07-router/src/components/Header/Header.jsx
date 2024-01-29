import React from 'react'
import {Link,NavLink} from 'react-router-dom'

 function Header() {
  return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                          src="data:image/png;base64,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"
                          className="mr-3 h-12"
                          alt="Logo"
                      />
                  </Link>
                  <div className="flex items-center lg:order-2 text-white">
                      <Link
                          to="#"
                          className="text-white hover:bg-violet-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link>
                      <Link
                          to="#"
                          className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Get started
                      </Link>
                  </div>
                  <div
                      className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li className='text-white'>
                              <NavLink
                                  to="/home"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b text-white
                                      border-gray-100
                                      ${isactive?"text-orange-700":"text-white-700" }
                                       hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                        hover:text-purple-900 lg:p-0
                                      `
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="contact"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b text-white
                                      border-gray-100
                                      ${isactive?"text-orange-700":"text-white-700" }
                                       hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                        hover:text-orange-700 lg:p-0
                                      `
                                  }
                              >
                                  Contact
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                  to="about"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b text-white
                                      border-gray-100
                                      ${isactive?"text-orange-700":"text-white-700" }
                                       hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                        hover:text-orange-700 lg:p-0
                                      `
                                  }
                              >
                                  About
                              </NavLink>
                          </li>
                          <li>
                          <a href="https://github.com/abhilasha336?tab=repositories" className='text-white'>  Github</a>  

                              <NavLink
                                  to="github"
                                  className={({isactive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 border-b text-white
                                      border-gray-100
                                      ${isactive?"text-orange-700":"text-white-700" }
                                       hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                        hover:text-orange-700 lg:p-0
                                      `
                                  }
                              >
                              </NavLink>
                          </li>
                          
                          
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}



export default Header