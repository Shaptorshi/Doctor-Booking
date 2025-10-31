import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";
import "./SpecialityMenu.css";

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="speciality-section">
      <h1>Find by Speciality</h1>
      <p>
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="speciality-list">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="speciality-item"
          >
            <img src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
