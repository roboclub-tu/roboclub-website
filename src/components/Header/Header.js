import React from 'react';
import "./Header.scss";
import fullLogo from "../../assets/fullLogo.png"; 
import logo from "../../assets/logo.png";

import { Link } from "react-scroll";


export function Header() {
  return <nav id="header">
      <div id="header-content">
        <div id="header-logo">
          <Link to="team" smooth={true} offset={-70} duration={750}> <img src={logo} alt="logo" id="logo"/></Link>
          <Link to="team" smooth={true} offset={-70} duration={750}> <img src={fullLogo} alt="logo" id="full-logo"/> </Link>     
        </div>
        <div id="header-links"> 
          <Link to="about-us" smooth={true} offset={-70} duration={750}> ЗА НАС </Link>
          <Link to="team" smooth={true} offset={-70} duration={750}>ЕКИП</Link>
          <Link to="projects" smooth={true} offset={-70} duration={750}>ПРОЕКТИ</Link>
        </div>
      </div>
  </nav>;
}
