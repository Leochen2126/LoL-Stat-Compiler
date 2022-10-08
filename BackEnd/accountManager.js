const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://dev:dev@lolstat.5fif06n.mongodb.net/?retryWrites=true&w=majority'

async function registerAccount(username, password, data, client) {
    // access DB to check if account already exists
    var acc = { id:await getNextID(data),username: username, password: password, roster:[] };
    data.collection("Account").insertOne(acc, function(err, res) {
        if (err) throw err;
            console.log("Account with username: " +username+" has been registered");
            client.close();
    });
}
async function getNextID(data){
    var count = await data.collection("Account").find({}).count();
    return count;
}
module.exports = {registerAccount};


// stuff for the counter exercise
async function addOneCounter(){
    // init counter
    var count = -1;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("lolstats");
        var myquery = { username: "Counter" };

        // get current counter
        dbo.collection("Account").findOne(myquery, function(err, result) {
            if (err) throw err;
            console.log(result.password);
            count = parseInt(result.password);
        });

        var newCount = { $set: {password: toString(count+1) } };
        dbo.collection("Account").updateOne(myquery, newCount, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
    });
}

async function fetchCounter(){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("lolstats");
        var myquery = { username: "Counter" };

        // get current counter
        dbo.collection("Account").findOne(myquery, function(err, result) {
            if (err) throw err;
            // if counter doc doesn't exist yet
            if(result == null || typeof(result) == "undefined"){
                // create new document for counter
                var acc = { id: -1,username: "Counter", password: "0", roster:[] };
                data.collection("Account").insertOne(acc, function(err, res) {
                    if (err) throw err;
                        console.log("Counter has been registered");
                        client.close();
                });
                return 0;
            }
            else{
                // console.log(result.password);
                return parseInt(result.password);
            }
        });
    });
}