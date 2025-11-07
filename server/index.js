const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const userCreation = require('./routes/routes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(bodyParser.json());
app.use('/api', userCreation);
async function dbConnection() {
    try {
        mongoose.connect('mongodb+srv://shaptorshi:tito5491@cluster0.eg2sk0l.mongodb.net/DoctorBooking?appName=Cluster0');

        console.log("Database Connected Succesfully!");
        app.listen(PORT, () => {
            console.log(`Server is connected to ${PORT}`);
        })
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}

dbConnection();