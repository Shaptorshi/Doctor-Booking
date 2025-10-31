import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";
import "./Contact.css"; // 👈 Import the CSS file

const Contact = () => {
  return (
    <MoveUpOnRender id="contact">
      <div className="contact-container">
        {/* -------- Title -------- */}
        <div className="contact-title">
          <p>
            CONTACT <span>US</span>
          </p>
        </div>

        {/* -------- Main Content -------- */}
        <div className="contact-content">
          <img
            className="contact-image"
            src={assets.contact_image}
            alt="Contact Prescripto"
          />

          <div className="contact-info">
            <p className="contact-heading">Our OFFICE</p>
            <p className="contact-text">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>

            <p className="contact-text">
              Tel: (415) 555-0132 <br /> Email: help@prescripto.com
            </p>

            <p className="contact-heading">Careers at PRESCRIPTO</p>
            <p className="contact-text">
              Learn more about our teams and job openings.
            </p>

            <button className="contact-button">Explore Jobs</button>
          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default Contact;
