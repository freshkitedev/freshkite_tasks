import * as mongoDAL from "./mongoDAL.js";
import { appConfig } from "../config/config.js";

const selectedDAL = appConfig.db == "mongo"?mongoDAL:null;

export const {findUserByName, registerUser, addTask, getTasks} = selectedDAL;