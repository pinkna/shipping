// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// mongoose
mongoose.connect('mongodb://localhost/shipping');





// user schema/model
var users = require('./Model/userModel.js');
var customer = require('./Model/customerModel.js');
var receipt = require('./Model/ReceiptModel.js');
//Acion Usermanagement
app.get('/userlist', function (req, res) {
  console.log('I received a GET request');

  users.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/userlist', function (req, res) {
  console.log(req.body);
  var Users = new users(req.body);
  //users.save(req.body, function(err, doc) {
  Users.save(function(err,doc){
    res.json(doc);
  });
});

app.delete('/userlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  users.remove({_id: req.params.id}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/userlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  users.findById(req.params.id, function (err, doc) {
    res.json(doc);
  });
});

app.put('/userlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  users.findOneAndUpdate(
    {_id: req.params.id},
    {$set: {username: req.body.username, password: req.body.password, name: req.body.name, surname: req.body.surname, taxid: req.body.taxid, address: req.body.address, tel: req.body.tel}},
    {new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


//Action customer
app.get('/customerlist', function (req, res) {
  console.log('I received a GET request');

  customer.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/customerlist', function (req, res) {
  console.log(req.body);
  var Customer = new customer(req.body);
  
  Customer.save(function(err,doc){
    res.json(doc);
  });
});



app.get('/customerlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  customer.findById(req.params.id, function (err, doc) {
    res.json(doc);
  });
});

app.put('/customerlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  customer.findOneAndUpdate(
    {_id: req.params.id},
    {$set: {name: req.body.name, surname: req.body.surname, address: req.body.address, tel: req.body.tel}},
    {new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});



//Receipt Control
app.post('/AddReceipt', function (req, res) {
  console.log(req.body);
  var Receipt = new receipt(req.body);
  
  Receipt.save(function(err,doc){
    res.json(doc);
  });
});

app.get('/receiptlist', function (req, res) {
  console.log('I received a GET request');

  receipt.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

//listening
app.listen(3000);
console.log("Server running on port 3000");