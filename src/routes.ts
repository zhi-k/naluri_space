import { Router } from "express";

import Circumference from "./controllers/circumference_controller";

const router = Router();

router.get("/sun", Circumference.getSun);

export default router;