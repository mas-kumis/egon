import express from "express";
const barangRouter = express.Router();

barangRouter.route("/")
.get((req, res) => {
    res.send("ini halaman semua barangs")
})
.post((req, res) => {
    res.send("ini post barangs")
})
.delete((req, res) => {
    res.send("ini delete barangs")
})

barangRouter.route("/:id")
.get( (req, res) => {
    res.send("ini halaman barangs dengan id: " + req.params.id)
})
.put((req, res) => {
    res.send("ini put barangs dengan id " + req.params.id)
})

export default barangRouter