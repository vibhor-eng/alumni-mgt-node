import express from "express"
import adminRouter from './routes/admin.router.js'


const app = express();

app.use("/admin",adminRouter)

export { app }
