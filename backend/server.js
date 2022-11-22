const express = require("express");
const app = express();
require("dotenv").config();
const logger = require("morgan");

const port = process.env.PORT || 8001;
const { sequelize } = require("./models");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", routes); //api routes
app.use("/public", express.static(path.join(__dirname, "public")));

const connectDb = async () => {
  console.log("Checking database connection.......");
  try {
    await sequelize.authenticate();
    console.log("Database connection Success");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1);
  }
};

(async () => {
  await sequelize.sync();
  await connectDb();
  console.log(`Attempting to run server on port ${port}`);
  app.listen(port, () => {
    console.log(`Server is running on port =${port}`);
  });
})();
