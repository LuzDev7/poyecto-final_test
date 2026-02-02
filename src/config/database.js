import pg from "pg";
const pool = new pg.Pool({
    user: process.env.DB_USER || process.env.dbUser,
    host: process.env.DB_HOST || process.env.dbHost,
    database: process.env.DB_NAME || process.env.dbName,
    password: process.env.DB_PASSWORD || process.env.dbPassword,
    port: process.env.DB_PORT || process.env.dbPort,
    ssl: {
        rejectUnauthorized: false,
    }
});

export async function conectar() {
    try {
        const client = await pool.connect();
        console.log("✅ Conexión a la BD exitosa");
        client.release();
    } catch (error) {
        console.error("❌ Error de conexión a la base de datos:", error.message || error);
    }

}

export default pool;
