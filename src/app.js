const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("dotenv-safe").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authController")(app);
require("./controllers/projectController")(app);

app.listen(3333);
