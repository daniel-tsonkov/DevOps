const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/api/notes", (req, res) => res.json({ message: "Hello from notes." }));

const port = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB! Starting server.");

    app.listen(port, () => {
      console.log(`Notes server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("ERROR!!!");
    console.error(err);
  });
