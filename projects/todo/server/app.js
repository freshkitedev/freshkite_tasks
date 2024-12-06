import exp from "express"
import { appConfig } from "./config/config.js"
import { connecToMongoDb } from "./db/mongoDB.js"
import userRouter from "./routes/userRoutes.js"
import taskRouter from "./routes/taskRoutes.js"

const app = exp()
/* Middlewares */
app.use(exp.json())
app.use('/auth', userRouter)
app.use('/task', taskRouter)

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