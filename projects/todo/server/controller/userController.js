import { loginService, registerService } from "../services/userService.js"

export const regUserController = async (req, res) => {
    try {
        const retVal = await registerService(req.body.username, req.body.password);
        res.status(200).json({msg:"User created successfully"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}

export const loginController = async (req, res) => {
    try {
        const retVal = await loginService(req.body.username, req.body.password);
        res.status(200).json({token:retVal.token});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}