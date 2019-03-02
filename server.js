var express = require("express");

var exphbs = require("express-handlebars");

var app = express();

const log = console.log
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {

    res.render("index", { title: 'Friend Finder' });

});






app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
