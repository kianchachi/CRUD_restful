const mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
 
  title:  { type: String }, 
  description: { type: String, default:""}, 
  completed:  { type: Boolean, default:false }, 


}, {timestamps: true})


mongoose.model('Task', UserSchema); 