var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('Vehicle', { title: 'Search for Vehicles' });
});*/
router.get('/', vehicle_controlers.vehicle_view_all_Page );

// // GET request for one costume.
router.get('/vehicle/:id', vehicle_controlers.vehicle_detail);

router.get('/detail', vehicle_controlers.vehicle_view_one_Page);

router.get('/create', vehicle_controlers.vehicle_create_Page);

router.get('/update', vehicle_controlers.vehicle_update_Page);

router.get('/delete', vehicle_controlers.vehicle_delete_Page);

module.exports = router;



