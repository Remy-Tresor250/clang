const mongoose = require("mongoose");
const {data} = require("../data")
const User = require("./userModel")

const dbconnection = () => {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to db")
    })
    .catch((err) => console.log(err));
};

module.exports = dbconnection;
