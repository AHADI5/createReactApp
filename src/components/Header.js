import React from "react";
import ReactLogo from "../images/logo192.png";

export default function Header () {
    return (
      <nav>
        <div className="logo-text">
          <img src ={ReactLogo}
          alt = "React Logo"/>
          <p>Facts About React </p>

        </div>
        <p>React Course Project 1</p>
      </nav>
    )
  } 

  