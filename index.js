import express from "express";
import "dotenv/config";
import vistasRoutes from "./rutas/index.js";
import { conectar } from "./src/config/database.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "vistas"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "css")));

// Rutas
app.use("/", vistasRoutes);

conectar();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Servidor escuchando en puerto ${PORT}`);
});
