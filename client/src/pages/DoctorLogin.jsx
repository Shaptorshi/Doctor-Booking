import { useState } from "react";
import { Link } from "react-router-dom";
import "./DoctorRegister.css";

const DoctorLogin = () => {
  const [activeRole, setActiveRole] = useState("doctor")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    image:""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/loginDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // _id: formData._id,
          email: formData.email,
          password: formData.password,
          image:formData.image
        }),
      });

      const data = await response.json();
      localStorage.setItem("loggedDoctor", JSON.stringify(data))
      if (!response.ok) {
        window.alert(data.message || "Something went wrong!");
        return;
      }
      window.alert('User Logged In Successfully');
      window.location.href = '/doctordashboard'
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="doctor-register-container">
      <div className="doctor-register-box">
        <div className='role-tabs'>'
          <button
            className={activeRole === "patient" ? "active" : ""}
            onClick={() => { window.location.href = '/login' } }
          >Patient
          </button>
          <button
            className={activeRole === "doctor" ? "active" : ""}
            onClick={() => { setActiveRole("doctor")}}
          >
            Doctor
          </button>
        </div>
        <h1 className="title">Doctor <span>Login</span></h1>
        <p className="subtitle">Join HealthConnect and reach more patients</p>

        <form onSubmit={handleSubmit} className="doctor-register-form">
          <div className="form-grid">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="register-btn">Login</button>
          <Link to="/registerDoctor" className="signup-link">
            Need an account? <b>Sign Up</b>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
