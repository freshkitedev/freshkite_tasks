import exp from "express"
import { appConfig } from "./config/config.js"
import { connecToMongoDb } from "./db/mongoDB.js"

const app = exp()

const connectToDb = async () => {
    try {
        if (appConfig.db == "mongo") {
            await connecToMongoDb();
        }
    } catch(err) {
        console.log("Connection to DB failed", err);
    }
}

app.listen(appConfig.port, () => {
    connectToDb();
    console.log("Server started on port: ", appConfig.port);
})