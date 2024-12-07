import jwt from "jsonwebtoken"
import { appConfig } from "../config/config.js";
export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({error:'Invalid token'})
    }
    try {
        const user = jwt.verify(token, appConfig.jwt_key);
        req.user = user;
        console.log("middle:", user);
        next()
    } catch {
        return res.status(401).json({error:'Invalid token'})
    }
}