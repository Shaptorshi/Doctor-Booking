const express = require("express");
const doctorRouter = express.Router();
const {
  appointmentCancel,
  appointmentComplete,
  appointmentsDoctor,
  doctorDashboard,
  doctorList,
  doctorLogin,
  doctorProfile,
  updateDoctorProfile,
} =  require("../controllers/doctorController.js");
const authDoctor = require("../middlewares/authDoctor.js");

// all doctor api
doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

module.exports = doctorRouter;
