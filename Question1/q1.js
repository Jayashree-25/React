//here we created a separate js file (back-end). We will use this in html file (frontend) by using fetch() 
const express = require("express");
const app = express();
const cors = require("cors"); 
const port = 3000;
app.use(cors());

app.get("/sum", (req, res) => {
    //retrive the data and convert 'a & b'to an integer
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString()); //convert sum to a string
})

app.listen(port, () => {
    console.log("server is working..")
})