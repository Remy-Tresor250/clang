const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    tag: String,
  },
  { timestamps: true }
);

const Prompt = mongoose.model("Prompt", promptSchema)

module.exports = Prompt