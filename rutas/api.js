import { Router } from "express";
import pool from "../src/config/database.js";

const router = Router();

// GET /api/productos - Retorna todos los productos en formato JSON
router.get("/productos", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM productos ORDER BY id_producto");
        res.json(result.rows);
    } catch (error) {
        console.error("❌ Error en API productos:", error.message);
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

export default router;
