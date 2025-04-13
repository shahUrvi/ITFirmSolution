import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p className="signup-redirect">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
