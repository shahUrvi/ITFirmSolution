import React from 'react';
import './Footer.css';
import {
  FaHome, FaBriefcase, FaPhone, FaTools,
  FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* IT Solutions - Main Heading */}
        <div className="footer-section">
          <h1 className="main-heading">IT Solutions</h1>
          <p>
            Providing tailored IT solutions<br />
            for your digital success
          </p>
        </div>

        {/* Quick Links - Centered Title */}
        <div className="footer-section quick-links-section">
          <div className="quick-links-title">Quick Links</div>
          <div className="quick-links-grid">
            <div><FaHome /> Home</div>
            <div><FaBriefcase /> Careers</div>
            <div><FaPhone /> Contact</div>
            <div><FaTools /> Services</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h2>Contact Info</h2>
          <div><FaEnvelope /> support@yourcompany.com</div>
          <div><FaPhone /> +91 12345 67890</div>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTwitter />
          </div>
          <p>Stay updated with our latest solutions & offers</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
