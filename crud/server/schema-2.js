const mongoose = require("mongoose");

const ExpertsSchema = new mongoose.Schema({
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
);

const Experts = mongoose.model("experts", ExpertsSchema);

module.exports = { Experts };
