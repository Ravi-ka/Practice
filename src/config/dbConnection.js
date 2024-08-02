import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const url = process.env.MONGO_DB_URL;
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error while connecting to MongoDB: " + error);
  }
};
