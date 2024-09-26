// server.js
const dotenv = require("dotenv");
dotenv.config();
//the other way to bring in dotenv
//require(dotenv).config();
const mongoose = require("mongoose"); //require package
const express = require("express");

const app = express();

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
  

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
