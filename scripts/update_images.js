import "dotenv/config";
import pool from "../src/config/database.js";

const images = {
    "Camiseta blanca": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "Camiseta negra": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    "Jean azul": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    "Pantalón negro": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
    "Chaqueta jean": "https://images.unsplash.com/photo-1543076447-235ad2dd2c0c?auto=format&fit=crop&w=800&q=80",
    "Chaqueta cuero": "https://images.unsplash.com/photo-1551028719-0f167b16cda5?auto=format&fit=crop&w=800&q=80",
    "Vestido rojo": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
    "Vestido azul": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    "Gorra deportiva": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "Cinturón cuero": "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c2?auto=format&fit=crop&w=800&q=80"
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
