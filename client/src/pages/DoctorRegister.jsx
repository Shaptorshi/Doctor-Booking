import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorRegister.css";

const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    exp: "",
    qualification: "",
    location: "",
    email: "",
    password: "",
    confirmPassword:"",
    fees: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/registerDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:formData.name,
            specialization:formData.specialization,
            qualification:formData.qualification,
            exp:formData.exp,
            location:formData.location,
            email:formData.email,
            password:formData.password,
            confirmPassword:formData.confirmPassword,
            fees:formData.fees
        }),
      });

      const data = await response.json();
      localStorage.setItem("registeredDoctor",JSON.stringify(data.response))
      if (!response.ok) {
        window.alert(data.message || "Something went wrong!");
        return;
      }
      window.alert('User Created Successfully');
      window.location.href = '/login'
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="doctor-register-container">
      <div className="doctor-register-box">
        <h1 className="title">Doctor <span>Registration</span></h1>
        <p className="subtitle">Join HealthConnect and reach more patients</p>

        <form onSubmit={handleSubmit} className="doctor-register-form">
          <div className="form-grid">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="specialization" placeholder="Specialization (e.g., Cardiologist)" value={formData.specialization} onChange={handleChange} required />
            <input type="text" name="exp" placeholder="Experience (in years)" value={formData.experience} onChange={handleChange} required />
            <input type="text" name="qualification" placeholder="Qualification (e.g., MBBS, MD)" value={formData.qualification} onChange={handleChange} required />
            <input type="text" name="location" placeholder="Clinic Location" value={formData.location} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            <input type="number" name="fees" placeholder="Fees" value={formData.fees} onChange={handleChange} />
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegister;
