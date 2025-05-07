import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send("server is ready");
})

const port = 3000;

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})