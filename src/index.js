import express from "express";

const app  = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.use("*",(req,res)=>{
  res.status(404)
  res.send("Halaman tidak ditemukan")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})