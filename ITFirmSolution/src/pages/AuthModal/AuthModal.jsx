// AuthModal.jsx
import React, { useState } from "react";
import "./AuthModal.css";

function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>✖</button>

        {isLogin ? (
          <div className="form-container">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p>
              Don’t have an account?{" "}
              <span className="toggle-link" onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          </div>
        ) : (
          <div className="form-container">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account?{" "}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
