import { Link,useParams } from 'react-router-dom'
import './FinalAppointment.css'

const Doctors = [
    {
        id:1,
        name: "Dr. Sarah Johnson",
        specialization: "Cardiologist",
        qualification: "MD, FACC",
        exp: "15 years experience",
        location: "123 Medical Center Drive, Suite 200",
        fees: "$150",
        rating: "4.8",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        email:"dr.chen@healthconnect.com",
        phone:"+1 (555) 234-5678"
    },
    {
    id:2,
    name: "Dr. Michael Chen",
    specialization: "Dermatologist",
    qualification: "MD, Board Certified",
    exp: "10 years experience",
    location: "456 Wellness Boulevard, Floor 3",
    fees: "$120",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    id:3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    qualification: "MD, FAAP",
    exp: "12 years experience",
    location: "789 Children's Hospital Road",
    fees: "$100",
    rating: "5.0",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id:4,
    name: "Dr. David Patel",
    specialization: "Orthopedic",
    qualification: "MD, MS Orthopedics",
    exp: "18 years experience",
    location: "321 Sports Medicine Center",
    fees: "$180",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    id:5,
    name: "Dr. Lisa Thompson",
    specialization: "General Physician",
    qualification: "MD, Family Medicine",
    exp: "8 years experience",
    location: "555 Primary Care Plaza",
    fees: "$80",
    rating: "4.6",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id:6,
    name: "Dr. James Wilson",
    specialization: "Dentist",
    qualification: "DDS",
    exp: "14 years experience",
    location: "888 Dental Care Center",
    fees: "$110",
    rating: "4.8",
    image: "https://randomuser.me/api/portraits/men/40.jpg"
  },
]

const FinalAppointment = () => {
    const {id} = useParams();
    const doctor = Doctors.find((doc)=>doc.id === parseInt(id));

    if(!doctor){
        return <h2>Doctor not found</h2>
    }

    return (
        <div>
            <button><Link to='/doctors'>←Back to Doctors</Link></button>
            <div className='doctor-profile'>
                {Doctors.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <h2>{item.specialization}</h2>
                        <h2>{item.qualification}</h2>
                        <h2>{item.exp}</h2>
                        <h2>{item.location}</h2>
                        <h2>{item.email}</h2>
                        <h2>{item.phone}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FinalAppointment
