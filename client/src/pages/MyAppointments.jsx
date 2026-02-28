import { useEffect, useState } from "react";
import { Calendar, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MyAppointments.css";

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!loggedUser) {
      alert("Please log in first!");
      window.location.href = "/login";
      return;
    }

    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings/${loggedUser.email}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch appointments");
        }

        const now = new Date();
        const upcoming = data.filter(
          (appt) => new Date(appt.date_time) >= now && appt.status === "Booked"
        );
        const past = data.filter(
          (appt) =>
            new Date(appt.date_time) < now || appt.status === "Cancelled"
        );

        setUpcomingAppointments(upcoming);
        setPastAppointments(past);
      } catch (error) {
        console.error(error);
        alert("Error loading appointments!");
      }
    };
    fetchAppointments();
  }, []);
  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?")) return;
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/${id}`, {
        method: "DELETE"
      })

      // const dataRemove = response.json();

      if (!response.ok) {
        throw new Error("Failed to Delete Appointment");
      }
      setUpcomingAppointments((prev) => prev.filter((appt) => appt._id !== id))
      setPastAppointments((prev) => [...prev, response.booking]);
    } catch (error) {
      console.log(error);
    }

  }
  const currentAppointments =
    activeTab === "upcoming" ? upcomingAppointments : pastAppointments;

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
              {activeTab === "upcoming" && (
                <>
                  <p>Book an appointment with a doctor to get started</p>
                  <Link to="/doctors" className="find-doctor-btn">
                    <Clock size={18} />
                    Find a Doctor
                  </Link>
                </>
              )}
            </div>
          ) : (
            <div className="appointment-list">
              {currentAppointments.map((appt, index) => (
                <div
                  key={`${appt.email}-${appt.date_time}-${index}`}
                  className="appointment-item"
                >
                  <h3>{appt.name}</h3>
                  <p><strong>Status:</strong>
                    <span
                      style={{ color: "white", borderRadius: "10px", padding: "0 5px", background: appt.status === "Cancelled" ? "red" : appt.status === "Booked" ? "green" : "gray", fontWeight: "bold" }}
                    >
                      {appt.status}
                    </span>
                  </p>
                  <p>
                    <strong><Calendar style={{ marginRight: "5px" }} /></strong>{" "}
                    {new Date(appt.date_time).toLocaleString()}
                  </p>
                  <p>
                    <strong><Mail style={{ marginRight: "5px" }} /></strong> {appt.email}
                  </p>
                  <p>
                    <strong style={{ marginRight: "5px" }}>Reason:</strong> {appt.visitReason}
                  </p>
                  {appt.status==="Booked" && new Date(appt.date_time)>new Date?<button className="cancel-btn" onClick={() => { handleCancel(appt._id) }}>Cancel</button>:""}
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
