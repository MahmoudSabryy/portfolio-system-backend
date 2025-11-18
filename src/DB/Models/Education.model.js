import mongoose, { Schema } from "mongoose";

const educationSectionSchema = new Schema({
  id: Number,
  section: {
    first: String,
    second: String,
    third: String,
  },
});

const educationSectionModel = await mongoose.model(
  "Education",
  educationSectionSchema
);

export default educationSectionModel;
