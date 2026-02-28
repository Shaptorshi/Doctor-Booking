const mongoose = require('mongoose')

const DoctorSchema = mongoose.Schema({
    name: { type: String, required: true },
    email:{type:String,required:true},
    password:{type:String,required:true},
    specialization: { type: String, required: true },
    qualification: { type: String, required: true },
    exp: { type: String, required: true },
    location: { type: String, required: true },
    fees: { type: Number, required: true },
    image: {type:String}
})

module.exports = mongoose.model('Doctors', DoctorSchema)