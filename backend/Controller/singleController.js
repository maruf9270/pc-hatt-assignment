import { Parts } from "../model/productModel";

export const singleData = async (req, res, next) => {
  const result = await Parts.findOne({ _id: req.query.index });

  res.status(200).json({
    success: true,
    status: 200,
    data: result,
  });
};
