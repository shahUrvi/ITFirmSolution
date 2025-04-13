import React from "react";
import "./IntroScreen.css";
import logo from "../assets/logo.png"; // make sure your logo is stored in src/assets/logo.png

const IntroScreen = () => {
  return (
    <div className="intro-screen">
      <div className="intro-content">
        <img src={logo} alt="IT Solutions Logo" className="intro-logo" />
        <h1 className="intro-text">IT Solutions</h1>
      </div>
    </div>
  );
};

export default IntroScreen;
