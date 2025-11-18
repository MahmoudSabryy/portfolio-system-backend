import mongoose, { Schema } from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const experienceSectionSchema = new Schema({
  ides: Number,
  section: {
    first: String,
    second: String,
    third: String,
  },
});
experienceSectionSchema.plugin(AutoIncrement, { inc_field: "ides" });

const experienceSectionModel = mongoose.model(
  "Experience",
  experienceSectionSchema
);

export default experienceSectionModel;
