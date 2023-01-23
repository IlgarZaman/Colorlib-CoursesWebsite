const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { Experts } = require("./schema-2");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/experts", async (req, res) => {
  const experts = await Experts.find();
  return res.status(200).json(experts);
});

app.get("/experts/:id", async (req, res) => {
  const { id } = req.params;
  const experts = await Experts.findById(id);
  return res.status(200).json(experts);
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ilqarzaman:ilqarzaman@cluster0.ypo0dtt.mongodb.net/Courses"
    );
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
