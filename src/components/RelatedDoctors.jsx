import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./RelatedDoctors.css"; // 👈 import CSS file

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div className="related-doctors-container">
      <h1 className="related-title">Related Doctors</h1>
      <p className="related-subtitle">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="related-grid">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="doctor-card"
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
          >
            <img className="doctor-image" src={item.image} alt={item.name} />

            <div className="doctor-info">
              <div
                className={`availability ${
                  item.available ? "available" : "not-available"
                }`}
              >
                <span
                  className={`status-dot ${
                    item.available ? "dot-available" : "dot-unavailable"
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

      <button
        className="see-all-btn"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        See All Doctors
      </button>
    </div>
  );
};

export default RelatedDoctors;
