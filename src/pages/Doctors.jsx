import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import MoveUpOnRender from "../components/MoveUpOnRender";
import "./Doctors.css"; // 👈 normal CSS file

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="doctors-page">
      <p className="browse-text">Browse through the doctors specialist.</p>

      <div className="doctors-layout">
        {/* ---------- Filter Section ---------- */}
        <div className="filter-section">
          <button
            className={`filter-toggle ${showFilter ? "active" : ""}`}
            onClick={() => setShowFilter((prev) => !prev)}
          >
            Filter
          </button>

          <div className={`filter-list ${showFilter ? "show" : ""}`}>
            {[
              "General physician",
              "Gynecologist",
              "Dermatologist",
              "Pediatricians",
              "Neurologist",
              "Gastroenterologist",
            ].map((item, index) => (
              <p
                key={index}
                onClick={() =>
                  speciality === item
                    ? navigate(`/doctors`)
                    : navigate(`/doctors/${item}`)
                }
                className={`filter-item ${
                  speciality === item ? "active" : ""
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* ---------- Doctors Grid ---------- */}
        <div className="doctors-grid-container">
          <MoveUpOnRender>
            <div className="doctors-grid">
              {filterDoc.map((item, index) => (
                <div
                  key={index}
                  className="doctor-card"
                  onClick={() => navigate(`/appointment/${item._id}`)}
                >
                  <img
                    className="doctor-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="doctor-info">
                    <div
                      className={`availability ${
                        item.available ? "available" : "not-available"
                      }`}
                    >
                      <span
                        className={`status-dot ${
                          item.available
                            ? "dot-available"
                            : "dot-unavailable"
                        }`}
                      ></span>
                      <p>{item.available ? "Available" : "Not Available"}</p>
                    </div>
                    <p className="doctor-name">{item.name}</p>
                    <p className="doctor-speciality">{item.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          </MoveUpOnRender>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
