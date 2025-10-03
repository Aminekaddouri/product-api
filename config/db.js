import mongoose from "mongoose";

const connectDB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("Database Connected Succeffuly");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;