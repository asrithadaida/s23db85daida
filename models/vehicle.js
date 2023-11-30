const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    VehicleName: {type:String, requried: 'Vehicle name is requried'},
    price: {type:Number, Minimum: 40000, maximum:300000},
    Model: String
})
module.exports = mongoose.model("Vehicle",vehicleSchema);