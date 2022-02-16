import React from 'react';
import "./style.scss";
import fullLogo from "../../assets/fullLogo.png"; 
import logo from "../../assets/logo.png";

export function Header() {
  return <nav id="header">
    <span>
      <img src={logo}/>
      <img src={fullLogo}/>
    </span>
    <a href="#about-us">ЗА НАС</a>
    <a href="#team">ЕКИП</a>
    <a href="#projects">ПРОЕКТИ</a>
  </nav>;
}
