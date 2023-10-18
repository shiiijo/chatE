const express = require("express");

const app = express();

app.get("/healthcheck", (req, res) => {
  res.json("health check ok");
});

app.listen("4040");
