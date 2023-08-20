import { createRouter } from "next-connect";
import connectToDB from "../../../../backend/Database/databaseConnect";
// import { Parts } from "../../../../backend/model/productModel";
import { partHandler } from "../../../../backend/Controller/partController";
import { singleData } from "../../../../backend/Controller/singleController";
import { getSingleCategoryItem } from "../../../../backend/Controller/singleCategory";
const router = createRouter();

router.get(getSingleCategoryItem);

export default router.handler();
