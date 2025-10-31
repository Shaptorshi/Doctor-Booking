import { assets } from "../assets/assets";
import "./Footer.css"; // 👈 Add this line

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Left section */}
        <div className="footer-section footer-left">
          <img className="footer-logo" src={assets.logo} alt="Prescripto Logo" />
          <p className="footer-desc">
            Prescripto: Bridging the gap between doctors and patients with
            seamless appointment management, secure prescriptions, and
            personalized healthcare solutions. Your health, our priority.
          </p>
        </div>

        {/* Center section */}
        <div className="footer-section footer-center">
          <p className="footer-heading">COMPANY</p>
          <ul className="footer-links">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="footer-section footer-right">
          <p className="footer-heading">GET IN TOUCH</p>
          <ul className="footer-links">
            <li>Tel: (415) 555-0132</li>
            <li>help@prescripto.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <hr />
        <p className="footer-copy">
          Copyright © 2024 - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
