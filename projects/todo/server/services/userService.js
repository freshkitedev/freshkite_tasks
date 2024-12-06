import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { appConfig } from "../config/config.js";
import { findUserByName, registerUser } from "../DAL/userDAL.js";

export const registerService = async (username, password) => {
    let user = await findUserByName(username);
    if (user) {
        throw new Error("User already exists")
    }
    user = await registerUser({username, password});
    return user;
}

export const loginService = async (username, password) => {
    let user = await findUserByName(username);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid credentials")
    }

    const token = jwt.sign({id:user._id}, appConfig.jwt_key, {expiresIn: '1h'});
    return {user, token};
}