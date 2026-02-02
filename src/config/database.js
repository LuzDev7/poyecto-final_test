import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

export async function conectar() {
    try {
        const client = await pool.connect();
        console.log("✅ Conectado a PostgreSQL en Render");
        client.release();
    } catch (error) {
        console.error("❌ Error de conexión a PostgreSQL:", error);
    }
}

export default pool;
