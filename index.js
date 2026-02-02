import express from "express";
import "dotenv/config";
import { conectar } from "./src/config/database.js";

const app = express();


app.get("/", (req, res) => {
    res.send("hola mundo");
});

conectar();
console.log("Servidor iniciado...");

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});

conectar();
console.log("Servidor iniciado...");