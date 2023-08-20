import connectToDB from "../Database/databaseConnect";
import { Parts } from "../model/productModel";

export const getSingleCategoryItem = async (req, res, next) => {
  try {
    const run = await connectToDB();
    const result = await Parts.find({
      categody: { $regex: req.query.category, $options: "i" },
    });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    throw new Error(error);
  }
};
