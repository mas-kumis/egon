
import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send ("Hello World!")
})


app.get("/barangs", (req, res) => {
    res.send("ini halaman semua barangs")
})

app.get("/barangs/:id", (req, res) => {
    res.send("ini halaman barangs dengan id: " + req.params.id)
})

app.post("/barangs", (req, res) => {
    res.send("ini post barangs")
})

app.put("/barangs/:id", (req, res) => {
    res.send("ini put barangs dengan id " + req.params.id)
})

app.delete ("/barangs", (req, res) => {
    res.send("ini delete barangs")
})

app.all('/barangs', (req, res) => {
  res.send('ini all barangs')
})

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