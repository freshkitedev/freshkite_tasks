import exp from "express"
import { appConfig } from "./config/config.js"
import { connecToMongoDb } from "./db/mongoDB.js"
import userRouter from "./routes/userRoutes.js"
import taskRouter from "./routes/taskRoutes.js"
import cors from "cors"

const app = exp()
/* Middlewares */
app.use(exp.json())
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}))
/* 
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',');

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

*/

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