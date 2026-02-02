import { Router } from "express";
import pool from "../src/config/database.js";

const router = Router();

// GET / - Landing Page con animación
router.get("/", (req, res) => {
    res.render("inicio", {
        title: "LuzShop - Tu ropa merece una segunda historia"
    });
});

// GET /tienda - Catálogo de productos (antes era /)
router.get("/tienda", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM productos");
        const productos = result.rows;
        res.render("index", {
            title: "Catálogo - LuzShop",
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

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(`Intentando login: ${email}`);
    // Futura validación de contraseña...
    res.redirect("/tienda"); // Redirige a la tienda tras loguearse
});

export default router;
