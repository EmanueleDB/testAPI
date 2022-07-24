const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  age: { type: Number, require: true },
  hasPets: { type: Boolean, require: true },
  date: { type: Date, default: Date.now },
})

const User = mongoose.model("User", userSchema)
module.exports = User
