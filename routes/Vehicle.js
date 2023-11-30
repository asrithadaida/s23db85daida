var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();


//A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('Vehicle', { title: 'Search for Vehicles' });
});*/
router.get('/', vehicle_controlers.vehicle_view_all_Page );

// // GET request for one costume.
router.get('/vehicle/:id', vehicle_controlers.vehicle_detail);

router.get('/detail', vehicle_controlers.vehicle_view_one_Page);

router.get('/create', secured, vehicle_controlers.vehicle_create_Page);

router.get('/update', secured,  vehicle_controlers.vehicle_update_Page);

router.get('/delete', secured, vehicle_controlers.vehicle_delete_Page);

module.exports = router;



