const express = require("express")
const pdf = require("html-pdf")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({"message": "Your Server is Up and Running..."}).statusCode(500)
})

app.listen(port,()=>{
    console.log("Server is Active!")
})