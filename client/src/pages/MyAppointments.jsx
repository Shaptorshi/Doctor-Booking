import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MyAppointments.css";

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Dummy data — replace later with real appointments
  const upcomingAppointments = [];
  const pastAppointments = [];

  const currentAppointments = activeTab === "upcoming" ? upcomingAppointments : pastAppointments;

  return (
    <div className="appointments">
      <Navbar />
      <div className="appointments-container">
        <h1>My Appointments</h1>
        <p>View and manage your medical appointments</p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "upcoming" ? "active" : ""}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming ({upcomingAppointments.length})
          </button>
          <button
            className={activeTab === "past" ? "active" : ""}
            onClick={() => setActiveTab("past")}
          >
            Past ({pastAppointments.length})
          </button>
        </div>

        {/* Appointments Section */}
        <div className="appointments-card">
          {currentAppointments.length === 0 ? (
            <div className="empty-state">
              <Calendar size={60} color="#007bff" />
              <h3>
                No {activeTab === "upcoming" ? "upcoming" : "past"} appointments
              </h3>
              {activeTab === "upcoming" ? (
                <>
                  <p>
                    Book an appointment with a doctor to get started
                  </p>
                  <Link to="/doctors" className="find-doctor-btn">
                    <Clock size={18} />
                    Find a Doctor
                  </Link>
                </>
              ) : null}
            </div>
          ) : (
            <div className="appointment-list">
              {currentAppointments.map((appt) => (
                <div key={appt.id} className="appointment-item">
                  <h3>{appt.doctorName}</h3>
                  <p>{appt.specialization}</p>
                  <p>
                    <strong>Date:</strong> {appt.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {appt.time}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAppointments;
