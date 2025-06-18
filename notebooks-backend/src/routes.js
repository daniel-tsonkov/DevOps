const express = require("express");
const mongoose = require("mongoose");
const { Notebook } = require("./models");

const notebookRouter = express.Router();

// Create new notebooks: POST '/'
// Retrive all notebooks: GET '/'
// Retrive a single notebook: GET '/:id' - localhost:8080/api/notebooks/some-id
// Update a single notebook: PUT '/:id' - localhost:8080/api/notebooks/some-id
// Delete a single notebook: DELETE '/:id' - localhost:8080/api/notebooks/some-id

notebookRouter.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "'name' field is required." });
    }

    const notebook = new Notebook({ name, description });
    await notebook.save();
    res.status(201).json({ data: notebook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.get("/", async (req, res) => {
  try {
    const notebooks = await Notebook.find();
    return res.status(200).json({ data: notebooks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const notebook = await Notebook.findById(id);

    if (!notebook) {
      return res.status(404).json({ error: "Notebook not found" });
    }
    return res.status(200).json({ data: notebook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

notebookRouter.put("/:id", async (req, res) => {});
notebookRouter.delete("/:id", async (req, res) => {});

module.exports = {
  notebookRouter,
};
