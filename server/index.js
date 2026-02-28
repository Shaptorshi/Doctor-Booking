require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const userCreation = require('./routes/routes')
const dns = require('node:dns/promises');
dns.setServers(['8.8.8.8','1.1.1.1']);

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use(bodyParser.json());
app.use('/api', userCreation);
async function dbConnection() {
    try {
        mongoose.connect(process.env.MONGO_URI);

        console.log("Database Connected Succesfully!");
        app.listen(PORT, () => {
            console.log(`Server is connected to ${PORT}`);
        })
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}

dbConnection();