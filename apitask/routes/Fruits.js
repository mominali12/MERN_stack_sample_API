const express = require("express");
const fruits = express.Router();
const cors = require("cors");

const Fruit = require("../models/Fruit");
fruits.use(cors());

process.env.SECRET_KEY = "secret";

fruits.post("/addfruit", (req, res) => {
  const today = new Date();
  const fruitData = {
    name: req.body.name,
    fruit: req.body.fruit,
    expiry: today
  };
  Fruit.create(fruitData)
    .then(fruit => {
      res.json({ status: fruit.name + " Added" });
    })
    .catch(err => {
      res.send("error: error adding fruit" + err);
    });
});

fruits.get("/getfruits", (req, res) => {
  Fruit.find({})
    .exec()
    .then(response => {
      res.json({ status: response });
    });
});

module.exports = fruits;
