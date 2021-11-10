const express = require("express");
const app = express();
const fortunes = require("./data/fortunes");

app.get("/fortunes", (req, res)=>{
    res.json(fortunes);
})

module.exports = app;