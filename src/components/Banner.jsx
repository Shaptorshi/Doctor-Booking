import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <h1>Book Appointment</h1>
          <h2>With 100+ Trusted Doctors</h2>
          {!token && (
            <button
              onClick={() => {
                navigate("/login");
                window.scrollTo(0, 0);
              }}
            >
              Create Account
            </button>
          )}
        </div>
        <div className="banner-right">
          <img src={assets.appointment_img} alt="Appointment"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
