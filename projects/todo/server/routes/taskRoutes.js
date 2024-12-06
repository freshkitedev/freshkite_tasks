import exp from "express"
import { authenticate } from "../middleware/userMiddleware.js"
import { addTaskController, getTaskController, updateTaskController } from "../controller/taskController.js";

const router = exp.Router()

router.use(authenticate);
router.post("/add", addTaskController);
router.get("/get", getTaskController);
router.put("/update/:id", updateTaskController);

export default router