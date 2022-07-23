import "./database"
import express from "express"
import routes from "./routes"
import bodyParser from "body-parser"
import helmet from "helmet"

const app = express()
app.use(helmet)
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.json({ urlencoded: true }))
routes(app)
