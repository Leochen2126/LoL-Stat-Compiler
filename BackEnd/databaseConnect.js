const accManager = require("./accountManager.js");

const e = require("express");
const { MongoClient } = require("mongodb");
// Server path
//const url = 'mongodb://localhost:27017/';
const url = 'mongodb+srv://dev:dev@lolstat.5fif06n.mongodb.net/?retryWrites=true&w=majority'

  
MongoClient.connect(url, async (err,client)=>{
    if(!err) {
        console.log("successful connection with the server");
        const data =client.db("lolstats");
        // const hello = data.listCollections().toArray();
        // for (let i = 0; i < hello.length; i++) {
        //     console.log(hello[i]);
        // }
        var result = await accManager.registerAccount("John", "2222", data, client);

        // var myobj = { name: "Company Inc", address: "Highway 37" };
        // data.collection("Account").insertOne(myobj, function(err, res) {
        //     if (err) throw err;
        //         console.log("1 document inserted");
        //         client.close();
        // });
        // hello.forEach(element => {
        //     console.log(element);
        // });
        

        
        // data.listCollections().toArray().then((docs) => {

        //     console.log('Available collections:');
        //     docs.forEach((doc, idx, array) => { console.log(doc.name) });
    
        // }).catch((err) => {
    
        //     console.log(err);
        // }).finally(() => {
    
        //     client.close();
        // });
    }
    else
        console.log("Error in the connectivity");
})