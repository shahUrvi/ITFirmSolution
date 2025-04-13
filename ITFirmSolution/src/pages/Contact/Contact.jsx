import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <p>Want to discuss a project or just say hello? We'd love to hear from you.</p>

      <div className="contact-container">
        {/* Left Side - Form */}
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Right Side - Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>contact@yourcompany.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>305, 3rd Floor, Skyline Plaza, IT Park Road, Ahmedabad, Gujarat</span>
          </div>

          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
