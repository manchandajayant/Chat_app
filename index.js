const express = require("express");
const app = express();
const port = 4000;

const db = {}; //fake database

db.messages = []; //fake table

const parser = express.json(); //parser for inbuilt parser function,parsing the text to the body
app.use(parser); //using the parser function

app.post("/message", (req, res) => {
  const { text } = req.body; //destrcuture text
  db.messages.push(text); //push it into the fake databse  array
  res.send(text); //response as text

  console.log("this is the database", db); //console.log the database
});

app.listen(port, () => console.log(`This app is on port ${port}`)); // app running on port, logged
