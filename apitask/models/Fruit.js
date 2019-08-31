const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FruitSchema = new Schema({
  name: {
    type: String
  },
  fruit: {
    type: String
  },
  expiry: {
    type: Date,
    default: Date.now
  }
});

module.exports = Fruit = mongoose.model("fruits", FruitSchema);
