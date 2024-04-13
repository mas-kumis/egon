
import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send ("Hello World!")
})

app.route("/barangs")
.get((req, res) => {
    res.send("ini halaman semua barangs")
})
.post((req, res) => {
    res.send("ini post barangs")
})
.delete((req, res) => {
    res.send("ini delete barangs")
})

app.route("/barangs/:id")
.get( (req, res) => {
    res.send("ini halaman barangs dengan id: " + req.params.id)
})
.put((req, res) => {
    res.send("ini put barangs dengan id " + req.params.id)
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