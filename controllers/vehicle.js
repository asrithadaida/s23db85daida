const vehicle = require('../models/vehicle');
var Vechicle = require('../models/vehicle');
// List of all Costumes
exports.vehicle_list = async function(req, res) {
    try{
        theVehicles = await Vechicle.find();
        res.send(theVehicles);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Costume.
exports.vehicle_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Vehicle.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }      
};

// Handle Costume create on POST.
exports.vehicle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Vechicle();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
    document.VehicleName = req.body.VehicleName;
    document.price = req.body.price;
    document.Model = req.body.Model;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.vehicle_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await vehicle.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }     
};
// Handle Costume update form on PUT.
exports.vehicle_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await vehicle.findById( req.params.id)
    // Do updates of properties
    if(req.body.VehicleName) toUpdate.VehicleName = req.body.VehicleName;
    if(req.body.price) toUpdate.price = req.body.price;
    if(req.body.Model) toUpdate.Model = req.body.Model;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};



// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function(req, res) {
    try{
        theVehicles = await Vechicle.find();
        res.render('Vehicle', { title: 'Vehicle Search Results', results: theVehicles });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.vehicle_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Vechicle.findById( req.query.id)
        res.render('vehicledetail', { title: 'Vehicle Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.vehicle_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('vehiclecreate', { title: 'Vehicle Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.vehicle_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Vechicle.findById(req.query.id)
        res.render('vehicleupdate', { title: 'Vehicle Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
    
exports.vehicle_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Vechicle.findById(req.query.id)
        res.render('vehicledelete', { title: 'Vehicle Delete', toShow:
        result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};