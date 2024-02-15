import React from 'react';
import './header.css';
import './js/IEupdate.js'; // Assuming this is the path to your IEupdate JavaScript file
import './js/custom'; // Assuming this is the path to your custom JavaScript file
import { useEffect,useState,useRef } from 'react';
// import { updateBrowser } from './js/IEupdate.js';
import { initializeCustom } from './js/custom';




function Header() {

  
    //function to avoid lag time and date when page refreshes
     function useAnimationFrame(callback) {

        const requestRef = useRef();
        const previousTimeRef = useRef();
        const animate = (time) => {
      
        if (previousTimeRef.current !== undefined) {
          const deltaTime = time - previousTimeRef.current;
          callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };
  
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, []); // Run only once when component mounts
  
    return requestRef; // Optionally, you can return the requestRef if you need to cancel the animation frame manually
  }

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useAnimationFrame(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString());
    setCurrentTime(now.toLocaleTimeString());
  });


  useEffect(() => {
    // Call any initialization functions from your JavaScript files here
    // For example, if IEupdate.js contains a function called initializeIEUpdate(),
    // you can call it like this:
    // updateBrowser();
    // Call the initializeIEUpdate function
    initializeCustom(); // Call the initializeCustom function

    // Make sure to handle any errors that may occur during the integration
  }, []);

  return (
    <header id="page_header">
      <div className="pgCenter">
        {/* Desktop header */}
        <div className="hllheader">
          <div className="hllthr">
            <ul className="nav">
              <li className="navItem">
                <a href="#" className="logo">
                  <img src="../public/hllogo.png" alt="logo" />
                </a>
              </li>
              <li className="navItem">
                <img src="../public/nrhm.png" alt="logo1" />
              </li>
              <li className="navItem">
                <img src="../public/upslogo.png" alt="logo2" />
              </li>
            </ul>
          </div>
          <div className="hlrhr">
            <h3>
              {currentTime}             
            <span>{currentDate}</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="hllMbl">
        <a href="#" className="logo">
          <img src="../public/hllogo.png" alt="logo" />
        </a>
        <div className="responsive-menu-wrapper">
          <div className="menu-icon">
            <div className="hamburger">
              <span></span>
            </div>
          </div>
        </div>

        <div className="hamburger-menu-wrapper">
          <div className="menu-wrapper">
            <a href="#" className="menu-close">
              &#10005;
            </a>
            <nav className="hamburger-nav">
              <div className="hllthr">
                <ul className="nav">
                  <li className="navItem">
                    <a href="#">
                      <img src="/nrhm.png" alt="logo1" />
                    </a>
                  </li>
                  <li className="navItem">
                    <a href="#">
                      <img src="/upslogo.png" alt="logo2" />
                    </a>
                  </li>
                  <li className="navItem">
                    <div className="hlrhr">
                      <h3>
                       {currentTime}
                        <span>{currentDate}</span>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
