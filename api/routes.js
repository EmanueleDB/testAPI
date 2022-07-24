import userRoutes from "./modules/users/usersRoutes.js"

export default (app) => {
  app.use("/", userRoutes)
}
