import { createRouter } from "next-connect";
import connectToDB from "../../../../backend/Database/databaseConnect";
// import { Parts } from "../../../../backend/model/productModel";
import { partHandler } from "../../../../backend/Controller/partController";
const router = createRouter();
connectToDB();
router.get(partHandler);

export default router.handler();
