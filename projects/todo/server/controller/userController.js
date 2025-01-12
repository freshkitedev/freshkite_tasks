import { loginService, registerService } from "../services/userService.js"

export const regUserController = async (req, res) => {
    try {
        console.log("regUser", req.body);
        const retVal = await registerService(req.body.username, req.body.password);
        console.log("regUser2");
        res.status(200).json({msg:"User created successfully"});
    } catch(err) {
        console.log(err);
        res.status(400).json({error:err.message});
    }
}

export const loginController = async (req, res) => {
    try {
        console.log("loginUser");
        const retVal = await loginService(req.body.username, req.body.password);
        console.log("loginUser2");
        res.status(200).json({msg:"User loging Success", token:retVal.token});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}