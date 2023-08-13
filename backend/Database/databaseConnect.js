import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    const uri =
      "mongodb+srv://pc-builder-dev:GEE5QJSkzmkUz6r2@cluster0.c1kdkc3.mongodb.net/pc-builder-dev";
    const connect = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connceted successfully");
  } catch (error) {
    throw new Error("Cannot connnect to the db");
  }
};

export default connectToDB;
