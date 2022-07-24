import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export default (app) => {
  const username = encodeURIComponent(process.env.MONGO_USER)
  const password = encodeURIComponent(process.env.MONGO_PASSWORD)
  const clusterName = encodeURIComponent(process.env.MONGO_URL)

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
}
