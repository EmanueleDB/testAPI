const express = require("express")
const UserSchema = require("../../models/userSchema")

const app = express()

app.post("/add_user", async (req, res) => {
  console.log(req.body)
  const user = new UserSchema(req.body)
  try {
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err)
  }
})
app.get("/users", async (req, res) => {
  const users = await UserSchema.find({})
  try {
    return res.status(200).send(users)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app
