import express from 'express'

import dotenv from "dotenv"

const app = express();

dotenv.config({
    path: './.env'
})

app.get('/', (req,res) => {
    res.send("server is readyss");
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})