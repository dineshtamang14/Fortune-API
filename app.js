const express = require("express");
const app = express();
const fortunes = require("./data/fortunes");

const port = 3000;

app.get("/fortunes", (req, res)=>{
    res.json(fortunes);
})


app.listen(port, ()=> console.log(`server is running at ${port}`));