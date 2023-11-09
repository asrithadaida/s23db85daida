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
exports.vehicle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle detail: ' + req.params.id);
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
exports.vehicle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.vehicle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Vechicle update PUT' + req.params.id);
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