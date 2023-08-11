import { Parts } from "../model/productModel";

export const partHandler = async (req, res, next) => {
  try {
    const data = await Parts.aggregate([
      { $group: { _id: "$categody", data: { $first: "$$ROOT" } } },
    ]);
    res.status(200).send({ success: true, data: data });
  } catch (error) {
    throw new Error(error);
  }
};
