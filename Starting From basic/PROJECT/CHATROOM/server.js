import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 5500;
const app = express();

app.get('/',(req,res) =>{
    res.send('hello world')
})
app.listen(PORT, () => {
    console.log("server is started")
});

