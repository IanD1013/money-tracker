const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/transaction");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json("test ok3");
});

app.post("/api/transaction", (req, res) => {
  console.log(process.env.MONGO_URL);
  //const { name, description, datetime } = req.body;
  res.json(req.body);
});

app.listen(4040);
//
