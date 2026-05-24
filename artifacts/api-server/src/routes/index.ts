import { Router, type IRouter } from "express";
import healthRouter from "./health";
import videoRouter from "./video";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(videoRouter);
router.use(contactRouter);

export default router;
