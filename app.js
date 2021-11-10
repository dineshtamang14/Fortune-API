const express = require("express");
const app = express();

const port = 3000;

app.get("/fortunes", (req, res)=>{
    res.send("hello, world");
})


app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
})