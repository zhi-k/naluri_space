import { Router } from "express";
import expressAsyncHandler from "express-async-handler";

import Circumference from "./controllers/v1/circumference_controller";

const router = Router();
const vOneRouter = Router();

router.use("/v1", vOneRouter);

vOneRouter.get("/sun", expressAsyncHandler(Circumference.getSun));

export default router;