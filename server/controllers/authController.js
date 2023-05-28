const User = require("../models/userModel");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

module.exports.SignIn = async (req, res) => {
  try {
    const { email, password, byGoogle } = _.pick(req.body, [
      "email",
      "password",
      "byGoogle",
    ]);
    const user = await User.findOne({ email: email });
    if (byGoogle && user) {
      if (user.email === email) {
        const token = jwt.sign(user._id, process.env.JWT_PRIVATE_KEY);
        delete user.password;
        return res.status(200).json({ token, user });
      }
    }

    if (user) {
      const checkedPassword = user.password === password;
      if (checkedPassword) {
        const token = jwt.sign(user._id, process.env.JWT_PRIVATE_KEY);
        delete user.password;
        return res.status(200).json({ token, user });
      }
      return res.status(400).json({ error: "Incorrect Email or Password" });
    }

    return res.status(400).json({ error: "Incorrect Email or Password" });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
