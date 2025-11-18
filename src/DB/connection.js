import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Portfolio");
    console.log(`Connected Successfully to Database `);
  } catch (error) {
    console.log(` Unable to connect to database ${error.message}`);
  }
};

export default connectDB;
