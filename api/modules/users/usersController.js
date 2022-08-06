import User from "./model/user.js"

export const addUser = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}
export const getUsers = async (req, res) => {
  const users = await User.find({})
    .select("firstName lastName email age hasPets -_id")
  try {
    return res.status(200).send(users)
  } catch (err) {
    res.status(500).send(err)
  }
}
export const deleteUser = async (req, res) => {
  const users = await User.deleteOne({ email: req.query.email })
  try {
    return res.status(200).send("User deleted")
  } catch (err) {
    res.status(500).send(err)
  }
}
export const editUser = async (req, res) => {
  const updatedUser = req.body
  const user = await User.updateOne({ email: req.body.email }, updatedUser)
  try {
    return res.status(200).send(user)
  } catch (err) {
    res.status(500).send(err)
  }
}
