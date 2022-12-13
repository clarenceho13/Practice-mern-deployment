require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");

const app= express();
const PORT =process.env.PORT ?? 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log("Connected to mongodb", MONGO_URI);
mongoose.connect(MONGO_URI);

app.use(morgan("dev"));
//add middleware (tell it to go up to client and then go down to dist)
app.use(express.static("../client/dist"));

app.get("/", (req,res)=>{
    res.json({ msg: "Hello World!"});
});

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`);
});