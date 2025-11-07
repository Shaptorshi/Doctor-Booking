const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User = require('../models/user_db')
const Doctor = require('../models/doctor_db')

router.post('/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
        const existedUser = await User.findOne({ email });
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
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
    const {name,email,password,confirmPassword,specialization,qualification,exp,location,fees} = req.body;
    try {
        const existedUser = await Doctor.findOne({ email });
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match!" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if (existedUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        await Doctor.create({name,email,password:hashedPassword,specialization,qualification,exp,location,fees});
        res.status(201).json({ message: "Doctor Registered Successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

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
        else {
            return res.status(201).send({ message: "User Logged In Successfully!" });
        }
    } catch (error) {
        res.status(500).send({ message: "Account does not exist! Create an account" });
    }
})

router.post("/loginDoctor",async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
    
        const isValidPass = await bcrypt.compare(password, user.password);
        if (!isValidPass) {
            return res.status(400).json({ message: "Invalid Email or Password!" });
        }
        else {
            return res.status(201).send({ message: "User Logged In Successfully!" });
        }
    } catch (error) {
        res.status(500).send({ message: "Account does not exist! Create an account" });
    }
})

module.exports = router;