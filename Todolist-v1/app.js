//jshint esversion:6
const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname+"/date.js")
const app = express();

const items = ["Programming","Play Stalker Anomaly"];
const workItem = ["Studyng NodeJs","Studyng Computer Science"];

let item = "";

//usare l engine di ejs
app.set('view engine', 'ejs');

//usare i static file css img
app.use(express.static("public"));

//rilevare i dati dalle form
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {

   let day = date.getDate();

   res.render("list",{ ListTitle: day, newListItems: items});
  
});

app.post("/",function (req,res) {
   item = req.body.newItem;
    console.log(req.body);
   if (req.body.list === "Work" ) {
       workItem.push(item);
       res.redirect("/work")
   } else {
      items.push(item);
      res.redirect("/");
   }
});

app.get("/work",function (req,res) { 

   res.render("list",{ ListTitle: "Work List", newListItems: workItem});
});

app.get("/about",function(req,res){
   res.render("about");
})

app.listen(3000, function () {
   console.log("Server Started : http://localhost:3000");
});


