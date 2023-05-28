const User = require("../models/userModel");
const _ = require("lodash");

module.exports.getUser = async (req, res) => {
  try {
    const { userId } = _.pick(req.query, "userId");
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
