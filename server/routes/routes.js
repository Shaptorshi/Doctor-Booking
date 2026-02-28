const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User = require('../models/user_db')
const Doctor = require('../models/doctor_db')
const appointments = require('../models/appointments')
const { getDoctorAppointments } = require("../controller/appointmentBooked");


router.post('/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    try {
        const existedUser = await User.findOne({ email });
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
            });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if (existedUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        await User.create({
            name,
            email,
            password: hashedPassword,
        })
        // await User.save();

        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ message: `Error while creating user${error.message}` })
    }
})

router.get("/registerDoctor", async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ message: "Error fetching doctors" });
    }
});




router.post("/registerDoctor", async (req, res) => {
    const { name, email, password, confirmPassword, specialization, qualification, exp, location, fees, image } = req.body;
    try {
        const existedUser = await Doctor.findOne({ email });
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if (existedUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        await Doctor.create({name, email, password: hashedPassword, specialization, qualification, exp, location, fees, image });
        // await Doctor.save();
        res.status(201).json({ message: "Doctor Registered Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
router.get("/registerDoctor/:doctorId", getDoctorAppointments);

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }

        
        const isValidPass = await bcrypt.compare(password, user.password);
        if (!isValidPass) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
        else{
            res.json({
                _id:user._id,
                name: user.name,
                email: user.email,
                // image: user.image,
            })
        }
    } catch (error) {
        res.status(500).send({ message: "Account does not exist! Create an account" });
    }
})

router.post("/loginDoctor", async (req, res) => {
    const { email, password } = req.body;
    try {
        const doctor = await Doctor.findOne({ email });
        if (!doctor) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
        const isValidPass = await bcrypt.compare(password, doctor.password);
        if (!isValidPass) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
        else {
            res.json({
                _id: doctor._id,
                name: doctor.name,
                email: doctor.email,
                image: doctor.image
            })
            return res.status(201).send({ message: "User Logged In Successfully!" });
        }
    } catch (error) {
        res.status(500).send({ message: "Account does not exist! Create an account" });
    }
})

router.post("/booking", async (req, res) => {
    try {
        const { patientId, doctorId, name, email, phone, visitReason, date_time } = req.body;
        
        if (!name || !email || !phone || !visitReason || !date_time) {
            return res.status(400).json({ message: "All fields are required!" });
        }
        if (new Date(date_time) < new Date()) {
            res.status(400).json({ message: "Please select a proper date!!" })
        }
        const alreadyBooked = await appointments.findOne({
            patientId,doctorId,email, date_time: new Date(date_time)
        })
        if (alreadyBooked) {
            return res.status(409).json({ message: "You have already booked an appointment for this date and time!" })
        }
        await appointments.create({
            patientId,doctorId,name, email, phone, visitReason, date_time, status: "Booked"
        })
        res.status(201).json({ message: "Appointments are booked successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})
// Get all appointments by user email
router.get("/bookings/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const userAppointments = await appointments.find({ email }).sort({ date_time: 1 });

        res.status(200).json(userAppointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/bookings/:id',async(req,res)=>{
    try {
        const { doctorId } = req.params;

        // Find all appointments where doctorId matches, populate patient info if needed
        const doctorAppointments = await appointments.find({ doctorId }).populate('patientId', 'name email');

        res.status(200).json(doctorAppointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: error.message });
    }
})
router.delete('/bookings/:id', async (req, res) => {
    try {
        const booking = await appointments.findByIdAndUpdate(req.params.id, { status: "Cancelled" }, { new: true });
        if (!booking) {
            res.status(404).json({ message: "Appointment not found!" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error occurred while deleting: ", error });
    }
})


module.exports = router;