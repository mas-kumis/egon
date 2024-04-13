
import express from "express";
const app = express();
const port = 3000

import router from "./route/index.js"
app.get("/", (req, res) => {
    res.send ("Hello World!")
})

app.use(router)


// app.get("/random.text", (req, res) => {
//     res.send("ini random text")
//     })

// app.get("/ab?cd", (req,res) =>{
//     res.send("ini ab?cd")
//     })

// app.get("/ab+cd", (req,res)=>{
//     res.send("ini ab+cd")
// })

// app.get("/ab*cd", (req,res) =>{
//     res.send("ini ab*cd")
// })

// app.get(/.*fly$/, (req, res) => {
//     res.send('/.*fly$/')
//   })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})