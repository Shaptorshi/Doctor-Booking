import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'
import './Login.css'; // Import the CSS file

const Login = () => {

  const [formData, setformData] = useState({
    // _id:"",
    email: "",
    password: ""
  })
  const [activeRole, setActiveRole] = useState("patient");
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
      localStorage.setItem("loggedUser", JSON.stringify({
        _id:data._id,
        name: data.name,
        email: data.email,
      }));
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
  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwtDecode(token);

    const response = await fetch('http://localhost:3000/api/google-login', {
      method: "POST",
      headers: {
        'Content-Type': "Application/json"
      },
      body: JSON.stringify({ token })
    })
    const data = await response.json();
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        name: data.name,
        email: data.email,
        token: data.jwt
      })
    );
  }
  return (
    <div className="login-container">

      <div className="login-box">
        <div className='role-tabs'>'
          <button
            className={activeRole === "patient" ? "active" : ""}
            onClick={() => { setActiveRole("patient") }}
          >Patient
          </button>
          <button
            className={activeRole === "doctor" ? "active" : ""}
            onClick={() => { window.location.href = '/loginDoctor' }}
          >
            Doctor
          </button>
        </div>
        <h1 className="title">Welcome to <span><Link to="/" style={{ textDecoration: "none", color: "red" }}>HealthConnect</Link></span></h1>
        

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
