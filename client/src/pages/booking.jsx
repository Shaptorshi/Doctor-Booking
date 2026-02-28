import { useState, useEffect } from "react";
import "./booking.css";

const BookAppointment = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitReason: "",
    date_time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectDoctor = (doctor) => {
  localStorage.getItem("selectedDoctor", JSON.stringify(doctor));
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const selectedDoctors = JSON.parse(localStorage.getItem("selectedDoctor"));
    if (!loggedUser) {
      alert("Please log in first!");
      setTimeout(() => {
        window.location.href = "/login"
      }, 500);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientId: loggedUser._id,
          doctorId: selectedDoctors._id,
          name: formData.name,
          email: loggedUser.email,
          phone: formData.phone,
          visitReason: formData.visitReason,
          date_time: formData.date_time,
        }),
      });
      const data = await response.json();
      localStorage.setItem("booked", JSON.stringify({
        patientId: loggedUser._id,
        doctorId: selectedDoctors._id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        visitReason: formData.visitReason,
        date_time: formData.date_time,
      }));
      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          visitReason: "",
          date_time: "",
        });
        setTimeout(() => {
          window.location.href = "/appointments"
        }, 1000);
      } else {
        alert(data.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error! Please try again later.");
    }
  };

  return (
    <div className="appointment-container">
      <h1>Book an Appointment</h1>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Reason for Visit</label>
        <input
          type="text"
          name="visitReason"
          value={formData.visitReason}
          onChange={handleChange}
          required
        />

        <label>Appointment Date & Time</label>
        <input
          type="datetime-local"
          name="date_time"
          value={formData.date_time}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSelectDoctor(formData)}>Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
