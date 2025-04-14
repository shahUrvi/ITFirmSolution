import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa"; // Using react-icons for the dashboard icon
import AuthModal from "../pages/AuthModal/AuthModal"; // Adjust path as needed
import "./Navbar.css";

function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand logo" to="/">IT Solutions</Link>

          <ul className="nav-links">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#services">Services</a></li>
            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link" href="#career">Careers</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
            <li>
              <button className="nav-link login-button" onClick={() => setShowAuthModal(true)}>
                Login / Signup
              </button>
            </li>
          </ul>

          <Link className="nav-link dashboard-icon" to="/dashboard" title="Dashboard">
  <FaTachometerAlt /> Dashboard
</Link>
          <Link className="btn-get-touch" to="/get-started">Get in Touch</Link>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}

export default Navbar;