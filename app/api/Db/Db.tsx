import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
 
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://sharmaaniket682:HKvZMajQDqEK9hIf@cluster0.nkzorwo.mongodb.net/?retryWrites=true&w=majority/wishlist");
    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default connectToDB;
