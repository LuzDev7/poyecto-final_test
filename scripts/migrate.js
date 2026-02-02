import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({
    user: process.env.dbUser,
    host: process.env.dbHost,
    database: process.env.dbName,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    ssl: {
        rejectUnauthorized: false,
    }
});

async function migrate() {
    try {
        const client = await pool.connect();
        console.log("✅ Conectado para migración");

        await client.query('ALTER TABLE productos ADD COLUMN IF NOT EXISTS image_url TEXT');
        console.log("✅ Columna image_url verificada/añadida en 'productos'");

        client.release();
    } catch (error) {
        console.error("❌ Error en la migración:", error.message);
    } finally {
        await pool.end();
    }
}

migrate();
