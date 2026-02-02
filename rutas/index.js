import { Router } from "express";
import pool from "../src/config/database.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM productos");
        const productos = result.rows;
        res.render("index", {
            title: "LuzShop - Tu tienda de ropa de segunda mano favorita",
            productos
        });
    } catch (error) {
        console.error("❌ Error al obtener productos:", error.message);
        res.status(500).send("Error al cargar los productos");
    }
});

router.get("/login", (req, res) => {
    res.render("login", { title: "Iniciar Sesión - LuzShop" });
});

router.get("/nosotros", (req, res) => {
    res.render("nosotros", { title: "Sobre Nosotros - LuzShop" });
});

router.get("/carrito", (req, res) => {
    res.render("carrito", { title: "Mi Carrito - LuzShop" });
});

export default router;
