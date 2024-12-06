import exp from "express"
import { authenticate } from "../middleware/userMiddleware.js"
import { addTaskController } from "../controller/taskController.js";

const router = exp.Router()

router.use(authenticate);
router.post("/add", addTaskController);

export default router