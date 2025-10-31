import { assets } from "../assets/assets";
import "./Header.css"; // 👈 import normal CSS

const Header = () => {
  return (
    <div className="header-container">
      {/* left side */}
      <div className="header-left">
        <p className="header-title">
          Book Appointment <br />
          With Trusted Doctors
        </p>

        <div className="header-sub">
          <img className="header-profiles" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a href="#speciality" className="book-btn">
          Book appointment
          <img className="arrow-icon" src={assets.arrow_icon} alt="arrow" />
        </a>
      </div>

      {/* right side */}
      {/* <div className="header-right">
        <img
          className="header-img"
          src={assets.header_img}
          alt="Doctors illustration"
        />
      </div> */}
    </div>
  );
};

export default Header;
