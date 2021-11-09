const express = require("express");
const app = express();

const hostname = "localhost";
const port = 3000;

app.get("/", (req, res)=>{
    res.send("hello, world");
})


app.listen(port, hostname, ()=>{
    console.log(`server is running ${hostname}:${port}`);
})