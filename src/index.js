import express from 'express'
import { app } from "./app.js";

import dotenv from "dotenv"


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