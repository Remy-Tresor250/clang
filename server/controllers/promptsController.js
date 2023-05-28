const Prompt = require("../models/promptModel");
const _ = require("lodash");

module.exports.createPrompt = async (req, res) => {
  try {
    const { prompt, tag, userId } = _.pick(req.body, [
      "prompt",
      "tag",
      "userId",
    ]);

    const newPrompt = new Prompt({
      userId,
      prompt,
      tag,
    });

    await newPrompt.save();
    res.status(201).json(newPrompt);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports.getAllPrompts = async (req, res) => {
  try {
    const {search} = _.pick(req.query, "search")
    const allPrompts = await Prompt.find();

    res.status(200).json(allPrompts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
