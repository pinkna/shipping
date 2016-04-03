// user model
var mongoose = require('mongoose');




var UserSchema = new mongoose.Schema({
  username: String,
  password:String,
  name:String,
  surname:String,
  taxid:String,
  address:String,
  tel:String
},{collection:"userlist"});


module.exports = mongoose.model('userss', UserSchema);