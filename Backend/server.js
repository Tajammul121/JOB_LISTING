const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT || 7000

app.get("/", (req,res)=>{
    res.json("hello")
})
app.get("/health", (req, res) => {
    console.log("I am in health api");
    res.json({
        service: "Backend Job Listing API Server",
        status: "active",
        time: new Date(),
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
    console.log(`http://localhost:${PORT}/`)
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Db connected!");
    })
    .catch((error) => {
        console.log("Db failed to connect", error);
    });
