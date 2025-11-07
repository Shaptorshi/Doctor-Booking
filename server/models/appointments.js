const mongoose = require('mongoose');

const appointments = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    visitReason:{type:String,required:true},
    date_time:{type:Date,required:true},
})

module.exports = mongoose.model("appointmentBooked",appointments);