import { createRouter } from "next-connect";
import { singleData } from "../../../../backend/Controller/singleController";
import register from "../../../../backend/Controller/register";
const router = createRouter();

router.post(register);

export default router.handler();
