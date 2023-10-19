const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const User = require("./models/User");

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

// run().catch(console.dir);

app.listen("4040");
