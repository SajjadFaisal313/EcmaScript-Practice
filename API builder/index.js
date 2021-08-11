const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({ data: ["arsalan", "aashir", "nameera"]});
});

app.get("/emp", (req, res) => {
    res.json("im from udgir")
});; 
app.get("/dept", (req, res) => {
    res.send("im react developer") 
});

if (app.listen(4000)) {
    console.log("connected to localhost:4000");
}