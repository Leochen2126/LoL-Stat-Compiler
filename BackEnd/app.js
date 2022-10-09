// const testfunc = require("./accountManager.js");
const express = require("express");
var https = require('https');
var fs = require('fs');
const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://dev:dev@lolstat.5fif06n.mongodb.net/?retryWrites=true&w=majority';
const app = express();
const accManager = require("./accountManager.js");

app.get("/", (req,res) => {
    res.send("?????????");
});

app.get("/caca", async (req,res) => {
    const lol = await accManager.test();
    console.log(lol)
    console.log("lol2")
    res.json({"users": "caca"});
});

// app.get("/couter", async (req,res) => {
//     var something = await accManager.fetchCounter();
//     res.json({"users": something});
// });

app.post("/addcouter", (req,res) => {
    accManager.addOneCounter()
    res.send("counted up");
});

//app.listen(5000, () => {console.log("5000");})

MongoClient.connect(url, async (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");
        const data =client.db("lolstats");
        app.get("/", (req,res) => {
            res.send("?????????");
        });
        app.get("/couter", async (req,res) => {
            var something = await accManager.fetchCounter(client);
            res.json({"users": something});
        });
        app.listen(5000, () => {console.log("5000");})
        // https.createServer({
        //     key: fs.readFileSync('server.key'),
        //     cert: fs.readFileSync('server.cert')
        //   }, app)
        //   .listen(3000, () => {console.log("3000");})
    }
    else
        console.log("Error in the connectivity");
})
