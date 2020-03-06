const express = require("express");
const app = express();
const port = 4000;
const Sse = require("json-sse");

const db = {}; //fake database

db.messages = []; //fake table

const parser = express.json(); //parser for inbuilt parser function,parsing the text to the body
app.use(parser); //using the parser function

const stream = new Sse(); //initiate a stream inside a stream

app.get("/stream", (req, res) => {
  //connecting to the stream endpoint
  stream.updateInit(db.messages);
  stream.init(req, res);
});

app.post("/message", (req, res) => {
  const { text } = req.body; //destrcuture text
  db.messages.push(text); //push it into the fake databse  array
  stream.send(text); //sending the data on the stream
  res.send(text); //response as text

  console.log("this is the database", db); //console.log the database
});

app.listen(port, () => console.log(`This app is on port ${port}`)); // app running on port, logged
