require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const dbconnection = require("./models/mongodb");
const authRouter = require("./routes/authRoutes");
const promptRouter = require("./routes/promptsRoutes");
const usersRouter = require("./routes/usersRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors({ origin: process.env.CORS_URL }));

app.use("/v1/api/auth", authRouter);
app.use("/v1/api/prompts", promptRouter);
app.use("/v1/api/users", usersRouter);

const startServer = async () => {
  try {
    await dbconnection();
    app.listen(process.env.PORT, () =>
      console.log(`Server in on and running on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
