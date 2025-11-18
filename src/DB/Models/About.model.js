import mongoose, { Schema } from "mongoose";

const aboutSectionSchema = new Schema({
  id: Number,
  section1: {
    first: String,
    second: String,
    third: String,
    fourth: String,
    fifth: String,
  },
  section2: {
    first: String,
  },
});

const aboutSectionModel = await mongoose.model("About", aboutSectionSchema);

export default aboutSectionModel;
