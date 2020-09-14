const mongoose = require("mongoose");
require("dotenv").config();
require("dotenv-safe").config();

mongoose.Promise = global.Promise;

const conn = process.env.DB;

mongoose.connect(conn, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
