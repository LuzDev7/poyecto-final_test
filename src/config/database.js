import pg from "pg";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error("❌ ERROR CRÍTICO: La variable DATABASE_URL no está definida.");
    console.error("ℹ️ En Render: Ve a 'Environment' y añade DATABASE_URL.");
    console.error("ℹ️ En Local: Revisa tu archivo .env");
    process.exit(1);
}

const pool = new Pool({
    connectionString,
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
