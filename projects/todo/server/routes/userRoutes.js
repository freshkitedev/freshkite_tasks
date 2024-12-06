import exp from "express"
import { loginController, regUserController } from "../controller/userController.js";

const router = exp.Router();

router.post("/register", regUserController)
router.post("/login", loginController)

export default router;