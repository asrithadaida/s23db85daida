var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('Vehicle', { title: 'Search for Vehicles' });
});*/
router.get('/', vehicle_controlers.vehicle_view_all_Page );

module.exports = router;
