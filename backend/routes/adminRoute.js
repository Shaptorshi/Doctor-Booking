const express = require("express");

const {
  addDoctor,
  adminDashboard,
  allDoctors,
  appointmentCancel,
  appointmentsAdmin,
  loginAdmin,
} = require("../controllers/adminController.js");

const upload = require("../middlewares/multer.js");
const authAdmin = require("../middlewares/authAdmin.js");
const { changeAvailabilty } = require("../controllers/doctorController.js");

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailabilty);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);
adminRouter.get("/dashboard", authAdmin, adminDashboard);

module.exports = adminRouter;
