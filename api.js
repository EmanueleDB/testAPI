const express = require("express")
const Router = require("./modules/users/usersRoutes")
const mongoose = require("mongoose")
const helmet = require("helmet")
const bodyParser = require ("body-parser")
require('dotenv').config()

const app = express()
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(Router)

const username = encodeURIComponent(process.env.MONGO_USER)
const password = encodeURIComponent(process.env.MONGO_PASSWORD)
const clusterName = encodeURIComponent(process.env.MONGO_URL)

console.log(process.env.MONGO_USER)

let uri = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/?retryWrites=true&w=majority`

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

try {
  mongoose.connect(uri, options)
} catch (err) {
  mongoose.createConnection(uri)
}

mongoose.connection
  .once("open", () => console.log("MongoDB Running..."))
  .on("error", console.error.bind(console, "connection error: "))

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
