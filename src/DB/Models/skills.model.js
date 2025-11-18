import mongoose, { Schema } from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";
const AutoIncrement = AutoIncrementFactory(mongoose);

const skillSchema = new Schema({
  ids: Number,
  name: { type: String },
  icon: { type: String },
});
skillSchema.plugin(AutoIncrement, { inc_field: "ids" });
const skillSectionModel = mongoose.model("Skill", skillSchema);

export default skillSectionModel;
