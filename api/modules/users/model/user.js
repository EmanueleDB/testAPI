import mongoose from "mongoose"

const user = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  hasPets: { type: Boolean },
  date: { type: Date, default: Date.now },
})

export default mongoose.model("User", user)
