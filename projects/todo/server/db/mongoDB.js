import { config } from "dotenv"
import mon from "mongoose"
import { appConfig } from "../config/config.js"

export const connecToMongoDb = async () => {
    try {
        await mon.connect(appConfig.mongo_url);
        console.log("MongoDB connect successful");
    } catch(err) {
        throw new Error(err);
    }
}