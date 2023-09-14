import express from "express";
import "./utils/envLoader.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen();
