require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb.js");
const connectCloudinary = require("./config/cloudnary.js");

const adminRouter = require("./routes/adminRoute.js");
const doctorRouter = require("./routes/doctorRoute.js");
const userRouter = require("./routes/usersRoute.js");

// app config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello I am working Dude 😎");
});

app.listen(port, () => console.log(`\nServer is running on ${port}`));
