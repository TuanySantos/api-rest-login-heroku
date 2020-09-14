const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/auth");
const User = require("../models/user");

require("dotenv").config();
require("dotenv-safe").config();

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  req.header["x-access-token"];

  const tokenUsuario = req.headers.authorization.split(" ")[1];
  const data = await jwt.verify(tokenUsuario, process.env.SECRET_KEY);
  const user = await User.findOne({ email: data.email });

  const dtNow = Math.round(new Date().getTime() / 1000);
  const expirar = new Date(data.exp * 1000 - dtNow * 1000).getMinutes();

  if (expirar <= 0) res.status(401).send({ error: "Invalid session" });

  res.send({ user });
});

module.exports = (app) => app.use("/userSearch", router);
