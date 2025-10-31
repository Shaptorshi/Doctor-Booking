import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "./Navbar.css"; // 👈 import your stylesheet

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src={assets.logo}
          alt="Prescripto"
          className="logo"
          onClick={() => navigate("/")}
        />

        <ul className={`nav-links ${showMenu ? "active" : ""}`}>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/doctors">ALL DOCTORS</NavLink></li>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>

        <div className="nav-actions">
          {token && userData ? (
            <div className="user-dropdown">
              <img
                src={userData.image}
                alt="User"
                className="user-img"
                onClick={() => setShowMenu(!showMenu)}
              />
              {showMenu && (
                <div className="dropdown-menu">
                  <p onClick={() => navigate("/my-profile")}>My Profile</p>
                  <p onClick={() => navigate("/my-appointments")}>My Appointments</p>
                  <p onClick={logout}>Logout</p>
                </div>
              )}
            </div>
          ) : (
            <button className="create-btn" onClick={() => navigate("/login")}>
              Create Account
            </button>
          )}
        </div>

        <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
