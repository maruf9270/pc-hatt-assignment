import { createRouter } from "next-connect";
import connectToDB from "../../../../backend/Database/databaseConnect";
// import { Parts } from "../../../../backend/model/productModel";
import { allParts } from "../../../../backend/Controller/partController";
const router = createRouter();
connectToDB();
router.get(allParts);

export default router.handler();
