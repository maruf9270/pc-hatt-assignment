import connectToDB from "../Database/databaseConnect";
import { User } from "../model/userModel";

const register = async (req, res, next) => {
  connectToDB();
  const data = req.body;

  try {
    const doesExists = await User.findOne({ email: data.email });
    if (doesExists) {
      res.status(500).json({ message: "User Already exists" });
    }
    const result = await User.create(data);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    throw new Error(error);
  }
};

export default register;
