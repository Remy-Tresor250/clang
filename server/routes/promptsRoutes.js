const express = require("express")
const { createPrompt, getAllPrompts } = require("../controllers/promptsController")
const promptRouter = express.Router()

promptRouter.get("/", getAllPrompts)

promptRouter.post("/create-prompt", createPrompt)

module.exports = promptRouter