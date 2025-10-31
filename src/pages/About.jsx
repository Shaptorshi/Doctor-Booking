import { assets } from "../assets/assets";
import MoveUpOnRender from "../components/MoveUpOnRender";
import "./About.css"; // 👈 Add this line

const About = () => {
  return (
    <MoveUpOnRender id="about">
      <div className="about-container">
        {/* -------- Title Section -------- */}
        <div className="about-title">
          <p>
            About <span>US</span>
          </p>
        </div>

        {/* -------- Top Section -------- */}
        <div className="about-top">
          <img
            className="about-image"
            src={assets.about_image}
            alt="About Prescripto"
          />
          <div className="about-text">
            <p>
              Welcome to Prescripto, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At Prescripto, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>
            <p>
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>
            <b>Our Vision</b>
            <p>
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>

        {/* -------- Why Choose Us -------- */}
        <div className="about-choose">
          <p>
            Why <span>Choose Us</span>
          </p>

          <div className="choose-grid">
            <div className="choose-card">
              <b>Efficiency:</b>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>

            <div className="choose-card">
              <b>Convenience:</b>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>

            <div className="choose-card">
              <b>Personalization:</b>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MoveUpOnRender>
  );
};

export default About;
