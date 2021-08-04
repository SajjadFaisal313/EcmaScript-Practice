const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("im sajjad faisal");
});

if (app.listen(4000)) {
    console.log("connected to localhost:4000");
}