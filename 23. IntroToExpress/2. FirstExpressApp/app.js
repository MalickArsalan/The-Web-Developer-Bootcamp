let express =  require("express")
let app = express()



// "/" => "Hi there!"
app.get("/", function(req,res){
    res.send("Hi there");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
    res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req,res){
    res.send("MEOW");
});

app.get("*", function(req,res){ // always set in last
    res.send("YOU ARE A STAR!!!");
});

// Tell Express to listen for requests (start server)
app.listen(3000,'localhost', function(){
    console.log("Server has started!!!");
});
// IN Cloud9 -> app.listen(process.env.PORT,process.env.IP);