import React from "react";
import Meme from "../img/meme_icon.png"

function Header() {
  return (
    <header>
      <div className="left-section">
        <div className="header-img-cont">
          <img src={Meme} className="header-img" />
        </div>
        <h2 className="page-title">Meme Generator</h2>
      </div>
      <div className="right-section">
        <h3>React Course - Project 5</h3>
      </div>
    </header>
  )
}

export default Header;