const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { Card } = require("./schema");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/course", async (req, res) => {
  const courses = await Card.find();
  return res.status(200).json(courses);
});

app.get("/course/:id", async (req, res) => {
  const { id } = req.params;
  const courses = await Card.findById(id);
  return res.status(200).json(courses);
});

app.delete("/course/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCourse = await Card.findByIdAndDelete(id);
  return res.status(200).json(deletedCourse);
});

app.post("/course", async (req, res) => {
  const newCourse = new Card({ ...req.body });
  const insertedCourse = await newCourse.save();
  return res.status(201).json(insertedCourse);
});
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ilqarzaman:ilqarzaman@cluster0.ypo0dtt.mongodb.net/Courses"
    );
    app.listen(8090, () => console.log("Server started on port 8090"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
