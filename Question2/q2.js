const express = require("express");
const app = express();
const cors = require("cors"); // Import CORS package
const port = 5000;
app.use(cors()); // Enable CORS for all routes

app.get("/interest", (req, res) => {
    //retrive the data and convert 'a & b'to an integer
    const p = parseFloat(req.query.principal);
    const r = parseFloat(req.query.rate);
    const t = parseFloat(req.query.time);
    const interest = (p * r * t)/100;
    res.send(interest.toString()); //convert sum to a string
})

app.listen(port, () => {
    console.log("server is working..")
})