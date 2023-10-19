const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/User");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get("/healthcheck", (req, res) => {
  res.json("health check ok");
});

app.post("/user/register", async (req, res) => {
  console.log(req.body);
  const { name, username, password } = req.body;
  await User.create(req.body);
  res.json({});
});

app.listen("4040");
