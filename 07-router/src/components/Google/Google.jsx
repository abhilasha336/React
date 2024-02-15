import React from 'react';
import './css/googlehomepage.css'


function Google() {
  return (
    <>
      <div className="mainblock">
        <div className="topblock">
          <a href="">Gmail</a>
          <a href="">Images</a>
          {/* <img src="https://cdn.iconscout.com/icon/free/png-256/free-dots-nine-3602636-3003318.png" alt="google apps" /> */}
          <img src="./assets/images/proficon.png" alt="google profile" />
        </div>
        <div className="middleblock">
          <div className="image">
            <img className="size1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMsUpHCjyu2w6ajo83TnydytoXAB3mOxx4MP1-w_s1PHUT5XNwLqlo24RnaJnjPelMUs&usqp=CAU" alt="image" width="272" />
          </div>
          <div className="search">
            <input className="searchbox" type="text" name="search" />
            <img className="searchimage" src="data:image/png;base64,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" alt="googlesearch" />
            <img className="voiceimage" src="data:image/png;base64,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" alt="googlesearch" />
          </div>
          <br />
          <div className="buttons">
            <div className="butt">
              <button>Google Search</button>
              <button>I'm Feeling Lucky</button>
            </div>
            <br />
            <div className="a">
              Google offered in:&nbsp;
              <a className="aa" href="">हिन्दी</a>
              <a className="ab" href="">বাংলা</a>
              <a className="ac" href="">తెలుగు</a>
              <a className="ad" href="">मराठी</a>
              <a className="ad" href="">தமிழ்</a>
              <a className="ae" href=" ">ગુજરાતી</a>
              <a className="af" href="">ಕನ್ನಡ</a>
              <a className="ag" href="">മലയാളം</a>
            </div>
          </div>
        </div>
        <div className="abovefooter">
          <span className="span">India</span>
        </div>
        <hr />
        <div className="footerblock">
          <div className="left">
            <a href="">About</a>
            <a href="">Advertising</a>
            <a href="">Business</a>
            <a href="">How search Works</a>
          </div>
          <div className="right">
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Google;
