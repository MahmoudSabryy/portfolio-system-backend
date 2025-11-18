import mongoose, { Schema } from "mongoose";

import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const projectSectionSchema = new Schema({
  id: Number,
  projectName: String,
  projectDesc: String,
  toolsData: String,
  link: String,
});

// auto increment for id
projectSectionSchema.plugin(AutoIncrement, { inc_field: "id" });

const projectSectionModel = await mongoose.model(
  "Projects",
  projectSectionSchema
);

export default projectSectionModel;
