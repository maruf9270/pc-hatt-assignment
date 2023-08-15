import { createRouter } from "next-connect";
import connectToDB from "../../../../backend/Database/databaseConnect";
// import { Parts } from "../../../../backend/model/productModel";
import { partHandler } from "../../../../backend/Controller/partController";
import { singleData } from "../../../../backend/Controller/singleController";
const router = createRouter();
connectToDB();
router.get(singleData);

export default router.handler();
