require("dotenv").config();
const express = require('express');
const app= express();
const PORT =process.env.PORT ?? 3000;

//add middleware (tell it to go up to client and then go down to dist)
app.use(express.static("../client/dist"));

app.get("/", (req,res)=>{
    res.json({ msg: "Hello World!"});
});

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`);
});