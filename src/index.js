import express from "express";
const app = express();
const port = 3000

import router from "./routes/index.js"
import path from "path"
import url from "url"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})