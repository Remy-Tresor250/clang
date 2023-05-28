const express = require("express")
const { SignIn } = require("../controllers/authController")
const authRouter = express.Router()

authRouter.post("/sign-in", SignIn)

module.exports = authRouter