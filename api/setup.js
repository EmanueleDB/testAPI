import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from "body-parser";
import cors from 'cors'

export default (app) => {
  app.use(cors())
  app.use(helmet())
  app.use(morgan("dev"))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
