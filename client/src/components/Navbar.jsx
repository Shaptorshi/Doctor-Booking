import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Stethoscope, Home, Calendar, BadgeInfo, Menu, X } from 'lucide-react';
import Logo from '../assets/heart_logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [info, setInfo] = useState({ name: '', email: '' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // toggle sidebar

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser) setInfo(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('booked');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <img src={Logo} alt="HealthCare Logo" className="navbar-logo" />
        <div className="navbar-brand">
          <h2>HealthCare</h2>
          <span>Book Your Doctor</span>
        </div>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="hamburger-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Links */}
      <div className={`navbar-links ${isSidebarOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
          <Home size={18} /> Home
        </NavLink>
        <NavLink to="/doctors" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
          <Stethoscope size={18} /> Find Doctors
        </NavLink>
        <NavLink to="/appointments" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
          <Calendar size={18} /> My Appointments
        </NavLink>
        <NavLink to="/about" className="nav-item" onClick={() => setIsSidebarOpen(false)}>
          <BadgeInfo size={18} /> About
        </NavLink>

        <div className="navbar-right">
          <div className="user-info">
            <h4>{info.name}</h4>
            <p>{info.email}</p>
          </div>
          {localStorage.getItem('loggedUser') ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="login-btn">
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;