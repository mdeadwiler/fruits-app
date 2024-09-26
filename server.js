// server.js
const dotenv = require("dotenv");
dotenv.config();
//the other way to bring in dotenv
//require(dotenv).config();
const mongoose = require("mongoose"); //require package
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));// You don't need it!!! This allows form data and converting it to a javaScript language after submission


// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Fruit = require("./models/fruit.js");

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
  });
  // server.js

// GET /fruits/new
// server.js

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs");
  });
  
  // server.js

// POST /fruits
app.post("/fruits", async (req, res) => {
    if(req.body.isReadyToEat === "on") {
req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect("/fruits/new");
  });
  
  

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
