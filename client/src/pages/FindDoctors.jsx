import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FindDoctors.css";
import { Search, Filter, MapPin, Calendar, Star, IndianRupee } from "lucide-react";
import { useState, useEffect } from 'react'


const FindDoctors = () => {
  const [doctors, setDoctors] = useState([])
  const [value, setValue] = useState("");
  const [specialization, setSpecialization] = useState("All Specializations");
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  }
  const search = doctors.filter((item) => {
    const matchedSearch = item.name.toLowerCase().includes(value.toLowerCase()) || item.specialization.toLowerCase().includes(value.toLowerCase())
    const matchedSpecialization = specialization === "All Specializations" || item.specialization === specialization;

    return matchedSearch && matchedSpecialization;
  });

  const handleBookAppointment = () => {
    localStorage.setItem("selectedDoctor", JSON.stringify(doctors))
  }
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/registerDoctor`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors", error);
      }
    }
    fetchDoctors();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="doctors-page">
        <div className="page-title">
          <h1>Find Your Doctor</h1>
          <p>Browse through our list of verified medical professionals</p>
        </div>

        <div className="search-bar">
          <div className="search-doctors">
            <Search size={20} color="#007bff" />
            <input
              type="text"
              placeholder="Search by doctor name or specialization..."
              value={value}
              onChange={handleChange}
            />
          </div>
          <div className="filter">
            <Filter size={20} color="#007bff" />
            <select className="dropdown-list" value={specialization} onChange={handleSpecializationChange}>
              <option value="All Specializations">All Specializations</option>
              <option value="General Physician">General Physician</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Psychiatrist">Psychiatrist</option>
              <option value="Dentist">Dentist</option>
              <option value="ENT Specialist">ENT Specialist</option>
              <option value="Gynecologist">Gynecologist</option>
            </select>
          </div>
        </div>

        <p className="doctor-count">Showing {search.length} doctors</p>

        <div className="doctor-grid">
          {search.length > 0 ? search.map((item, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-image">
                <img src={item.image} alt={item.name} />
                <div className="rating-badge">
                  <Star size={14} color="#fff" />
                  <span>{item.rating}</span>
                </div>
              </div>
              <h2>{item.name}</h2>
              <span className="specialization">{item.specialization}</span>
              <h4>{item.qualification}</h4>
              <p className="experience">{item.exp} years experience</p>
              <p className="location">
                <MapPin size={16} />
                {item.location}
              </p>
              <p className="fees"><IndianRupee size={20} />{item.fees}</p>
              <button className="appointment-btn" onClick={() => {
                localStorage.setItem(
                  "selectedDoctor",
                  JSON.stringify({
                    _id: item._id,
                    name: item.name,
                    email: item.email
                  })
                );
              }}>
                <Link style={{ textDecoration: "none" }} to='/booking'>
                  <Calendar size={16} />
                  Book Appointment
                </Link>
              </button>
            </div>
          )) : <div className="no-results">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076501.png"
              alt="No results"
              style={{ width: "150px", marginBottom: "20px" }}
            />
            <h3>No doctors found</h3>
            <p>Try searching with a different name or specialization.</p>
          </div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindDoctors;

// const DoctorsList = [
//   {
//     id: 1,
//     name: "Dr. Sarah Johnson",
//     specialization: "Cardiologist",
//     qualification: "MD, FACC",
//     exp: "15 years experience",
//     location: "123 Medical Center Drive, Suite 200",
//     fees: "$150",
//     rating: "4.8",
//     image: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: 2,
//     name: "Dr. Michael Chen",
//     specialization: "Dermatologist",
//     qualification: "MD, Board Certified",
//     exp: "10 years experience",
//     location: "456 Wellness Boulevard, Floor 3",
//     fees: "$120",
//     rating: "4.9",
//     image: "https://randomuser.me/api/portraits/men/52.jpg"
//   },
//   {
//     id: 3,
//     name: "Dr. Emily Rodriguez",
//     specialization: "Pediatrician",
//     qualification: "MD, FAAP",
//     exp: "12 years experience",
//     location: "789 Children's Hospital Road",
//     fees: "$100",
//     rating: "5.0",
//     image: "https://randomuser.me/api/portraits/women/68.jpg"
//   },
//   {
//     id: 4,
//     name: "Dr. David Patel",
//     specialization: "Orthopedic",
//     qualification: "MD, MS Orthopedics",
//     exp: "18 years experience",
//     location: "321 Sports Medicine Center",
//     fees: "$180",
//     rating: "4.7",
//     image: "https://randomuser.me/api/portraits/men/33.jpg"
//   },
//   {
//     id: 5,
//     name: "Dr. Lisa Thompson",
//     specialization: "General Physician",
//     qualification: "MD, Family Medicine",
//     exp: "8 years experience",
//     location: "555 Primary Care Plaza",
//     fees: "$80",
//     rating: "4.6",
//     image: "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     id: 6,
//     name: "Dr. James Wilson",
//     specialization: "Dentist",
//     qualification: "DDS",
//     exp: "14 years experience",
//     location: "888 Dental Care Center",
//     fees: "$110",
//     rating: "4.8",
//     image: "https://randomuser.me/api/portraits/men/40.jpg"
//   },
// ];
