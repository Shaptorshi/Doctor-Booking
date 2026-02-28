import {Link} from 'react-router-dom'
import {Star} from 'lucide-react'
import './BookAppointment.css'

const BookAppointment = () => {
  return (
    <section className='appointment'>
      <Star size={40} color='orange'/>
      <h1 className='appointment-heading'>Ready to Book Your Appointment?</h1>
      <p className='appointment-subtitle'>Join thousands of satisfied patients who trust us with their healthcare</p>
      <button className='start-btn'><Link to='/doctors' style={{textDecoration:"none",color:"#0d98fb",fontWeight:"lighter"}}>Get Started Now → </Link></button>
    </section>
  )
}

export default BookAppointment
