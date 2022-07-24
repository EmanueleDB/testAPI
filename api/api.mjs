import db from './db.js'
import express from 'express'
import setup from './setup.js'
import routes from './routes.js'

const app = express()
db(app)
setup(app)
routes(app)
