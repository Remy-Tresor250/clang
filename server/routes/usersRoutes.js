const express = require("express")
const { getUser } = require("../controllers/usersController")
const usersRouter = express.Router()

usersRouter.get("/user/:id", getUser)

module.exports = usersRouter