import express from "express"
const app = express()
const port = 3000



app.use((req, res, next) => {
    console.log("contoh log")
    next()
  })

 app.use((req,res,next) => {
     req.requestTime = new Date()
     next()
 })

 app.get('/', (req,res) => {
    let responText = "Hello World <br>"
    responText += `Waktu permintaan ${req.requestTime}`
    res.send(responText)
})
app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
})