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