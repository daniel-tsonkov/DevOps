const express = require("express");
const { KeyValue } = require("../models/keyValue");

const keyValueRouter = express.Router();

keyValueRouter.post("/", (req, res) => {
  const { key, value } = req.body;

  try {
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  return res.send("creating key-value pair");
});
keyValueRouter.get("/:key", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  return res.send("getting key-value pair");
});
keyValueRouter.put("/:key", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  return res.send("updating key-value pair");
});
keyValueRouter.delete("/:key", (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  return res.send("deleting key-value pair");
});

module.exports = {
  keyValueRouter,
};
