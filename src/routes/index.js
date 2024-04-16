// EJS For Easy CRUD

import express from "express";
const router = express.Router();
import barangRouter from "./barang.js";

router.use("/",(req,res)=>{
    const data = {
        title : "Ini adalah title",
        layout:"layout/main-layout",
        data: [
            {id:100,nama:'Baju' },
            {id:200,nama:'Sepatu' },
            {id:300,nama:"celana"}

        ]
    }
    res.render("index", data)
})
router.use("/barangs", barangRouter)
router.use("*", (req, res) => {
    res.status(404).send("404 Not Found")
})

export default router