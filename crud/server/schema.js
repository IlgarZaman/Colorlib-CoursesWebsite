const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    star: {
      type: String,
    },
    halfStar: {
      type: String,
    },
    reating: {
      type: String,
    },
    count: {
      type: String,
    },
    price: {
      type: String,
    },
    buttonText: {
      type: String,
    },
  },
);

const Card = mongoose.model("course", CardSchema);

module.exports = { Card };
