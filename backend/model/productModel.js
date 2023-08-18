import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Parts =
  (await mongoose.models.Parts) ||
  (await mongoose.model("Parts", productSchema));

// export default mongoose.models.Parts ||
//   mongoose.model("components", productSchema);
