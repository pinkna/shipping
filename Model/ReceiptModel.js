// user model
var mongoose = require('mongoose');




var UserSchema = new mongoose.Schema({
  date: { type: Date,default: Date.now },
  time:{type:String},
  dateuser:{type:String},
  surname:String,
  address:String,
  name:String,
  tel:String,
  desname:String,
  destel:String,
  desaddress:String,
  type:String,
  itemdescription:String,
  quantity:Number,
  weight:Number,
  price:Number,
  paymenttype:String,
  remark:String,
  billing:String,
  status:{type:String,default:"Chiang Mai"}
},{collection:"receipt"});


module.exports = mongoose.model('receipt', UserSchema);