import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
  ssl: {
    rejectUnauthorized: false, 
  },
});



export async function conectar() {
  try {
    const client = await pool.connect();
    console.log("✅ Conexión a la BD exitosa");
    client.release();
  } catch (error) {
    console.error("❌ Error de conexión a la base de datos:", error.message);
    throw error;
  }
}

export default pool;
