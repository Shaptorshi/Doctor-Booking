const mongoose = require("mongoose");

const appointmentsSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    visitReason: { type: String, required: true },
    date_time: { type: Date, required: true },
    status: { type: String, enum: ["Booked", "Confirmed", "Completed", "Cancelled"], default: "Booked" }
}, { timestamps: true });

module.exports = mongoose.model("appointmentBooked", appointmentsSchema);
