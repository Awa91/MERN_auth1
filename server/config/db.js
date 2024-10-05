import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    process.env.DB_URI
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
