import express from 'express'
import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
})

app.get('/', (req,res) => {
    res.redirect('/admin/login');  // Redirect to /new-route
})

const port = process.env.PORT || 4000;

connectDB()
.then(() => {
    app.listen(port || 5000, () =>{
        console.log(`Server is running at port ${port}`)
    })
})
.catch((err) => {
    console.log("mongo db connected !!! ",err)
})