import * as expresss from "express";
import todoRouter from "./todo";
import userRouter from "./user";

const app = expresss();

const router = expresss.Router();

router.use("/user", userRouter);

router.use("/todo", todoRouter);

export default router;
