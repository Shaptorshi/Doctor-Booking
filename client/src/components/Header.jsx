import {Link} from "react-router-dom";
import { Calendar, Stethoscope, CheckCircle2 } from "lucide-react";
import "./HeroSection.css";
import heroImage from '../assets/hero_image.jpeg'
import bgImage from '../assets/bg_image.jpg'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        {/* Left Text Content */}
        <div className="hero-content">
          <h1>
            Your Health, <br />
            <span>Our Priority</span>
          </h1>
          <p>
            Book appointments with the best doctors in your area. Fast, simple,
            and secure healthcare booking at your fingertips.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">
              <Link to="/doctors" style={{textDecoration:"none",color:"#0d98fb"}}>
                <Stethoscope size={18} />
                Find a Doctor
              </Link>
            </button>
            <button className="btn secondary">
              <Link to="/appointments" style={{textDecoration:"none",color:"#0d98fb"}}>
                <Calendar size={18} />
                My Appointments
              </Link>
            </button>
          </div>
        </div>


        <div className="hero-image">
          <img
            src={heroImage}
            alt="Doctor"
            className="doctor-img"
          />

          {/* Floating Card */}
          <div className="floating-card">
            <CheckCircle2 className="check-icon" size={22} />
            <div>
              <h4>10,000+</h4>
              <p>Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
