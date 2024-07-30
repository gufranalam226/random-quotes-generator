const express = require("express")
const app  = express()



app.get("/", (req, res)=>{
    res.send("welcome")
})

app.listen(3030, ()=>{
    console.log("server is running on the port no 3030")
})