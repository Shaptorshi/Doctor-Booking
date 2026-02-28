import React from "react";
import { Stethoscope } from "lucide-react";
import "./Specialization.css";

const specializations = [
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Orthopedic",
  "Neurologist",
  "Psychiatrist",
  "Dentist",
];

const Specializations = () => {
  return (
    <section className="specializations-section">
      <h2 className="specializations-title">Browse by Specialization</h2>
      <p className="specializations-subtitle">
        Find the right specialist for your needs
      </p>

      <div className="specializations-grid">
        {specializations.map((item, index) => (
          <div key={index} className="specialization-card">
            <Stethoscope size={28} color="#0B57D0" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <button className="view-all-btn">
        View All Doctors →
      </button>
    </section>
  );
};

export default Specializations;
