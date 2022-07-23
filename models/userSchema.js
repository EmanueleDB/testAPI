const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: String,
    pets: Boolean,
    oranges: Number,
  },
)

const User = mongoose.model("User", userSchema)
module.exports = User
