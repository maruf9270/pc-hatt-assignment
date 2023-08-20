import mongoose from "mongoose";
const connectToDB = async () => {
  const uri =
    "mongodb+srv://pc-builder-dev:GEE5QJSkzmkUz6r2@cluster0.c1kdkc3.mongodb.net/pc-builder-dev";
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToDB;
