const express = require('express')
const app = express();
const port = 3000

app.get("/",(req,res) => {
    res.send({"message" : "Hello World 45 !"})
})

app.listen(port,()=> {
    console.log(`server running on port ${port}`)
})