require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DBusername,
    password: process.env.DBpassword,
    database: process.env.DBdatabase,
    host: process.env.DBhost,
    dialect: "postgres",
  },
  test: {
    username: process.env.DBusername,
    password: process.env.DBpassword,
    database: process.env.DBdatabase,
    host: process.env.DBhost,
    dialect: "postgres",
  },
  production: {
    username: process.env.DBusername,
    password: process.env.DBpassword,
    database: process.env.DBdatabase,
    host: process.env.DBhost,
    dialect: "postgres",
  },
};
