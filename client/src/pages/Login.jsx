import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react'
import './Login.css'; // Import the CSS file

const Login = () => {

  const [formData, setformData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      })

      const data = await response.json();

      if (!response.ok) {
        window.alert("User not found!Please create an account first");
        window.location.href = "/register"
        return;
      }
      window.alert("User Logged in Successfully");
      window.location.href = '/'
    } catch (error) {
      console.log(error);
      window.alert("Error occurred while logging in! Please try again later");
    }
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">Welcome to <span>HealthConnect</span></h1>
        <h3 className="subtitle">Sign in to continue</h3>

        <button className="google-btn">Continue with Google</button>

        <div className="divider">
          <hr /> <span>or</span> <hr />
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name='email' placeholder="you@example.com" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Min. 8 characters" value={formData.password} onChange={handleChange} required />

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <div className="links">
          <Link to="/resetPassword" className="reset-link">Forgot Password?</Link>
          <Link to="/register" className="signup-link">
            Need an account? <b>Sign Up</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
