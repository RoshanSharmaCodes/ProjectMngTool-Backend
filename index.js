const express = require("express")
const pdf = require("html-pdf")
const cors = require("cors")
const bodyParser = require("body-parser")
const pdfTemplate = require("./Pages/Report")
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({"message": "Your Server is Up and Running..."}).statusCode(500)
})

app.post("/createReport", (req, res) => {
    pdf.create(pdfTemplate(),{}).toFile("Report.pdf",(err)=>{
        if(err) {
            return Promise.reject(err)
        }
        return Promise.resolve()
    })
    res.send({"message": "PDF Generated"})
})

app.get("/getReport", (req,res)=>{
    res.sendFile(`${__dirname}/Report.pdf`)
})

app.listen(port,()=>{
    console.log("Server is Active!")
})
