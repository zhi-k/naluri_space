import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import Circumference from "./controllers/circumference_controller";

const router = Router();

router.get("/sun", expressAsyncHandler(Circumference.getSun));

export default router;