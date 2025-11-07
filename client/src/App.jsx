import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Register  from './pages/Register';
import ResetPassword from './pages/resetPassword';
import Login from './pages/Login';
import FindDoctors from './pages/FIndDoctors';
import MyAppointments from './pages/MyAppointments';
import About from './pages/About'
import FinalAppointments from './pages/FinalAppointment'
import DoctorRegister from './pages/DoctorRegister';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/resetPassword' element={<ResetPassword />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registerDoctor' element={<DoctorRegister/>}/>
        <Route path='/doctors' element={<FindDoctors />}/>
        <Route path='/appointments' element={<MyAppointments />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/finalAppointments/:id' element={<FinalAppointments />}/>
      </Routes>
    </Router>
  )
}

export default App
