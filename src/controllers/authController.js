const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
require("dotenv-safe").config();
const router = express.Router();

function timeZone(dt) {
  return dt.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
}

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET_KEY, {
    expiresIn: 1800,
  });
}

router.post("/signUp", async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "Email already exists" });

    const tokenAuth = await generateToken({ email });

    const userObj = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumbers: req.body.phoneNumbers,
      create_date: timeZone(new Date()),
      update_date: timeZone(new Date()),
      login_date: timeZone(new Date()),
      tokenUser: tokenAuth,
    });

    const user = await User.create(userObj);
    return res.send({ user });
  } catch (error) {
    res.status(400).send({ error: "Registration Failed" });
  }
});

router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(401).send({ error: "Invalid user" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(401).send({ error: "Invalid password" });

  await User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { login_date: timeZone(new Date()) } },
    { new: true }
  );
  await User.findOneAndUpdate(
    { email: req.body.email },
    { $set: { update_date: timeZone(new Date()) } },
    { new: true }
  );

  res.status(200).send({ user });
});

module.exports = (app) => app.use("/auth", router);
