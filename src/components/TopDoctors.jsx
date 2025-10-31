import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./TopDoctors.css";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="top-doctors">
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>

      <div className="doctor-grid">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="doctor-card"
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
          >
            <img src={item.image} alt={item.name} />
            <div className="doctor-info">
              <div
                className={`status ${
                  item.available ? "available" : "unavailable"
                }`}
              >
                <span></span>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>
              <h3>{item.name}</h3>
              <p className="speciality">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="more-btn"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        View More
      </button>
    </div>
  );
};

export default TopDoctors;
