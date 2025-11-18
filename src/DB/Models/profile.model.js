import mongoose, { Schema } from "mongoose";

const profileSectionSchema = new Schema({
  id: Number,
  image: String,
  section1: {
    first: String,
    second: String,
  },
  section2: {
    first: String,
    second: String,
  },
  section3: {
    first: String,
    second: String,
    third: String,
  },
});

const profileSectionModel = await mongoose.model(
  "profile",
  profileSectionSchema
);

export default profileSectionModel;
