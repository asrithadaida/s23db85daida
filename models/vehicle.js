const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    VehicleName: String,
    price: Number,
    Model: String
})
module.exports = mongoose.model("Vehicle",vehicleSchema);