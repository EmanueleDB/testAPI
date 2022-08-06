import { Router } from "express"
import * as usersController from "./usersController.js"

const router = new Router()

router.post("/user", usersController.addUser)
router.get("/users", usersController.getUsers)
router.delete("/user", usersController.deleteUser)
router.patch("/user", usersController.editUser)

export default router
