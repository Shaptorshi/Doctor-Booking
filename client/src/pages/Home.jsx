import React from 'react'
import  Header  from '../components/Header'
import  Navbar  from '../components/Navbar'
import  Features  from '../components/Features'
import  Specialization  from '../components/Specialization'
import  BookAppointment  from '../components/BookAppointment'
import  Footer  from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Specialization />
      <BookAppointment/>
      <Footer />
    </div>
  )
}

export default Home
