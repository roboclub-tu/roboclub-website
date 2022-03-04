import React from 'react';
import "./Header.scss";
import fullLogo from "../../assets/fullLogo.png"; 
import logo from "../../assets/logo.png";

export function Header() {
  return <nav id="header">
      <div id="header-content">
        <div id="header-logo">
          <img src={logo} alt="logo" id="logo"/>
          <img src={fullLogo} alt="logo" id="full-logo"/>
        </div>
        <div id="header-links"> 
          <a href="#about-us" id="first">ЗА НАС</a>
          <a href="#team">ЕКИП</a>
          <a href="#projects">ПРОЕКТИ</a>
        </div>
      </div>
  </nav>;
}
