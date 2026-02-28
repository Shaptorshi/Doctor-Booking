import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validatePassword(formData.password)){
      alert("Password must contain at least 8 characters long and include uppercase, lowercase, number, and special character.")
    }

    if(formData.password!==formData.confirmPassword){
      alert("Passwords do not match!")
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        })
      })
      const data = await response.json();
      localStorage.setItem("registeredUser", JSON.stringify({
        name: formData.name,
        email: formData.email,
      }));
      if (!response.ok) {
        window.alert(data.message || "Something went wrong!");
        return;
      }
      window.alert('User Created Successfully');
      window.location.href = '/login'
    } catch (error) {
      console.log(error);
      window.alert("Server Error.Please try again later!")
    }

  }

  return (
    <div className="register-container">
      <div className="register-box">
        <Link to="/login" className="back-link">← Back to Sign In</Link>

        <h1 className="title">Create your account</h1>
        <p className="subtitle">Join HealthConnect and get started today!</p>

        <form className="register-form" onSubmit={handleSubmit} method='POST'>
          <label htmlFor="">Name</label>
          <input type="text" name='name' placeholder='Enter your name...' value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Min. 8 characters" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Re-enter Password" value={formData.confirmPassword} onChange={handleChange} required />

          <button type="submit" className="register-btn">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login"><b>Sign In</b></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
