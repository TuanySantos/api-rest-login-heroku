const jwt = require("jsonwebtoken");
require("dotenv").config();
require("dotenv-safe").config();

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  exports.decoderToken = async (token) => {
    const data = await jwt.verify(token, global.process.env.SECRET_KEY);
    return data;
  };

  if (!authHeader) return res.status(401).send({ error: "Unauthorized" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).send({ error: "Unauthorized" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Unauthorized" });

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Unauthorized" });

    req.userId = decoded.id;

    return next();
  });
};
