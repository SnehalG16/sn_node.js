const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    if(req.method == "GET" && req.url =="/home") 
       res. end("<h1>welcome</h1›")
    else if (req.method == "GET" && req.url == "/about") 
        {
res.end("<h1>This is About</h1>")
       }

       else if (req.method == "GET" && req.url == "/getproductdata") {
         fs.readFile("./db.json", "utf-8", (err, products) => {
        if (err)
        {
        console.log(err)
        res. end (err)
        }
        else
        {
        const productdatafromdb = JSON. parse (products)
        console. log (products)
        res.end (JSON.stringify(productdatafromdb.products))
        }
         })
        }

        else if(req.method == "GET" && req.url == "/user") {
            fs.readFile("./db.json", "utf-8", (err, products) => {
           if (err)
           {
           console.log(err)
           res. end (err)
           }
           else
           {
           const productdatafromdb = JSON. parse (user)
           console. log (products)
           res.end (JSON.stringify(productdatafromdb.user))
           }
            })
           }
           else{
            res.end("<h1>not found</h1>")
           }
           });
   



server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
