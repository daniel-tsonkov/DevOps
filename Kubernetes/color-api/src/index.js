const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("bodyParser");
const healthRouter = require("./routes/health");
const apiRouter = require("./routes/api");
const { getColor, getHostname } = require("./utils");
const rootRouter = require("./routes/root");
const bodyParser = require("body-parser");

const port = 80;
const app = express();
//const port = process.env.PORT || 3000;

const delay_startup = process.env.DELAY_STARTUP === "true";
console.log(`Delay startup : ${delay_startup}`);

app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use("/", healthRouter);
app.use("/", rootRouter);

if (delay_startup) {
  const start = Date.now();

  while (Date.now() - start < 60000) {}
}

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Color API listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB");
    console.error(err);
  });
