const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res)=>{
    const {url} = req;

    if(url === "/trans"){
        res.setHeader("content-type", "application/json");
        res.write("hello there");
    } 
});


server.listen(port, hostname, ()=>{
    console.log(`server is running ${hostname}:${port}`);
})