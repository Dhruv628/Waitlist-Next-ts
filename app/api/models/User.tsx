import mongoose, { Schema, model, models } from "mongoose";
const UserSchema = new mongoose.Schema({
  User_type:{
  type:String,
  required:true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message:{
    type: String,
  },
  company: {
    type: String,
  
  },
  designation: {
    type: String,
 
  },
  industry: {
    type: String,

  },
  service: {
    type: String,

  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});
const User = models.User || model("User", UserSchema);
export default User;
