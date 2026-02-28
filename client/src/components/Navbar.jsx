import {useEffect, useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Stethoscope,Home,Calendar,BadgeInfo} from 'lucide-react'
import Logo from '../assets/heart_logo.jpg'
import './Navbar.css'

const Navbar = () => {
  const [info,setInfo] = useState({
    name:"",
    email:"",
  })
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if(storedUser){
      setInfo(JSON.parse(storedUser));
    }
  }, [])
  const handleLogout =()=>{
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("booked");
    window.location.href = '/login';
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={Logo}
          alt="HealthCare Logo"
          className="navbar-logo"
        />
        <div className="navbar-brand">
          <h2>HealthCare</h2>
          <span>Book Your Doctor</span>
        </div>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className="nav-item">
          <Home size={18} />
          Home
        </NavLink>
        <NavLink to="/doctors" className="nav-item">
          <Stethoscope size={18} />
          Find Doctors
        </NavLink>
        <NavLink to="/appointments" className="nav-item">
          <Calendar size={18} />
          My Appointments
        </NavLink>
        <NavLink to="/about" className="nav-item">
          <BadgeInfo size={18} />
          About
        </NavLink>
      </div>

      <div className="navbar-right">
        <div className="user-info">
          <h4>{info.name}</h4>
          <p>{info.email}</p>
        </div>
        {localStorage.getItem("loggedUser")?<button className="logout-btn" onClick={handleLogout}>Logout</button>:<button className="login-btn"><Link to="/login" style={{textDecoration:"none",color:"black"}}>Login</Link></button>}
        
      </div>
    </nav>
  );
};

export default Navbar;
