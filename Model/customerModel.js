// user model
var mongoose = require('mongoose');




var UserSchema = new mongoose.Schema({
  name: String,
  surname:String,
  address:String,
  tel:String
},{collection:"customerlist"});


module.exports = mongoose.model('customer', UserSchema);