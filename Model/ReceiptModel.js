// user model
var mongoose = require('mongoose');




var UserSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  sendername: {type: String,
        required: true},
  sendertel:String,
  desname:String,
  destel:String,
  desaddress:String,
  type:String,
  itemdescription:String,
  quantity:String,
  weight:String,
  price:String,
  paymenttype:String,
  remark:String,
  billing:String,
  status:{type:String,default:"Chiang Mai"}
},{collection:"receipt"});


module.exports = mongoose.model('receipt', UserSchema);