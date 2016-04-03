var express = require('express'); // Use Express
var customer_model = require('../Model/customermaster'); // Use mongoose Model File
var router = express.Router(); // Use Express Route

/*
Create path '/add' use 'GET' parameter
Action this function : Insert data to mongodb use mongoose model file
*/
router.get('/add', function(req,res,next) {
	customer_model.create({name : 'Test', surname : '12345', address : 'kusumoto.com@gmail.com',tel:'2232-32323'} , function(err,doc) { //Insert data
		if (err) return next(err);
		res.send(doc); // Show Data to Insert
	});
});

module.exports = router;