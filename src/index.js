import express from "express";
const app = express();
const port = 3000;

const mockUser = [
    {id:1,username:"anson"},
    {id:2,username:"brian"},
    {id:3,username:"chris"}
]

app.get("/", (req,res) =>{
    res.status(201).send({msg : "Hello!"})
})
app.get("/api/users",(req,res)=>{
    console.log(req.query)
    const {query : {filter, value}} = req
    res.send(mockUser)
})


app.get("/api/products",(req,res)=>{
    res.send([
        {id:1,product:"apple"},
        {id:2,username:"banana"},
        {id:3,username:"cacing"}])
})

app.listen (port, () => {
    console.log(`Example app listening on port ${port}`)
}) 