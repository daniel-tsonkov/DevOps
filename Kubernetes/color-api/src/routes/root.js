const express = require("express");
const { getHostname } = require("../utils");
const { getColors } = require("../db/color");

const rootRouter = express.Router();

rootRouter.get("/", async (req, res) => {
  const { colorKey } = req.query;

  console.log(`Color key: ${colorKey}`);

  const color = await getColors({ key: colorKey });
  const hostname = getHostname();

  res.send(`<h1 style="color:${color};">Hello from color-api!</h1>
  <h2>Hostname: ${hostname}</h2>`);
});

module.exports = rootRouter;
