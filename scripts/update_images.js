import "dotenv/config";
import pool from "../src/config/database.js";

const images = {
    "Camiseta blanca": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500",
    "Camiseta negra": "https://images.unsplash.com/photo-1583743814036-7fbffdd78177?q=80&w=500",
    "Jean azul": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=500",
    "Pantalón negro": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=500",
    "Chaqueta jean": "https://images.unsplash.com/photo-1527082395-e12ce210ee8f?q=80&w=500",
    "Chaqueta cuero": "https://images.unsplash.com/photo-1551028719-0f167b16cda5?q=80&w=500",
    "Vestido rojo": "https://images.unsplash.com/photo-1494774157365-9e04c63220e7?q=80&w=500",
    "Vestido azul": "https://images.unsplash.com/photo-1485231183945-fa6e54caeb8e?q=80&w=500",
    "Gorra deportiva": "https://images.unsplash.com/photo-1530866495547-21f2a71f49ee?q=80&w=500",
    "Cinturón cuero": "https://images.unsplash.com/photo-1523712959-54b9d96dbc24?q=80&w=500"
};

async function updateImages() {
    try {
        for (const [nombre, url] of Object.entries(images)) {
            await pool.query(
                "UPDATE productos SET image_url = $1 WHERE nombre = $2",
                [url, nombre]
            );
            console.log(`✅ Actualizada imagen para: ${nombre}`);
        }
        console.log("✨ Todas las imágenes han sido actualizadas");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error actualizando imágenes:", error);
        process.exit(1);
    }
}

updateImages();
