import express from "express"
const app = express()
const port = 3000


app.get('/', (req,res) => {
    res.send("Hello World")
})
// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//   })


app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
})