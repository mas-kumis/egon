import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
