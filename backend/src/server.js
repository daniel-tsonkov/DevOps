import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://mongodb/key-value-db", {
  auth: {
    username: "key-value-user",
    password: "key-value-password",
  },
  connectTimeoutMS: 500,
});
