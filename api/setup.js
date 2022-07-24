import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from "body-parser";

export default (app) => {
  app.use(helmet())
  app.use(morgan("dev"))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
