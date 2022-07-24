const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  hasPets: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
})

const User = mongoose.model("User", userSchema)
module.exports = User
