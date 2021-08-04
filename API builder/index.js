const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ data: ["arsalan", "aashir", "nameera"]});
});

app.get("/emp", (req, res) => {
    res.send("im from udgir")
});
app.get("/dept", (req, res) => {
    res.send("im react developer") 
});

if (app.listen(4000)) {
    console.log("connected to localhost:4000");
}