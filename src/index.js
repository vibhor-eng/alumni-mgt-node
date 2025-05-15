import express from 'express'
import dotenv from "dotenv"
import { app } from "./app.js";


dotenv.config({
    path: './.env'
})

app.get('/', (req,res) => {
    res.send("server is ready");
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})