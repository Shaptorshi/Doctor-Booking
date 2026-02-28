import { useEffect, useState } from "react";
import "./DoctorDashboard.css";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    image: "",
    specialization: ""
  });

  useEffect(() => {
    const storedDoctor = localStorage.getItem("loggedDoctor");
    if (!storedDoctor) return;

    const doctorData = JSON.parse(storedDoctor);

    setInfo(doctorData);
    fetchAppointments(doctorData._id);
  }, []);

  const fetchAppointments = async (doctorId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/registeredDoctor/${doctorId}`
      );
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">HealthConnect</h2>

        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Patients</li>
            <li>Appointments</li>
          </ul>
        </nav>

        <div className="doctor-profile">
          {info.image && <img src={info.image} alt="Doctor" />}
          <div>
            <p className="doctor-name">Dr. {info.name}</p>
            <p className="doctor-role">{info.specialization}</p>
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("loggedDoctor");
                window.location.href = "/loginDoctor";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <h2>Today's Appointments</h2>

        {appointments.length === 0 ? (
          <p>No appointments found</p>
        ) : (
          appointments.map((appt) => (
            <div className="patient-card" key={appt._id}>
              <div>
                <h3>{appt.patientId?.name || "Unknown Patient"}</h3>
                <p>{appt.visitReason}</p>
                <small>
                  {new Date(appt.date_time).toLocaleString()}
                </small>
              </div>

              <div className="patient-actions">
                <span className={`status ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </span>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default DoctorDashboard;
