import pg from "pg";
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

export async function conectar() {
    try {
        const client = await pool.connect();
        console.log("Conectado a la base de datos");
        client.release();
    } catch (error) {
        console.error("error de conexion a la base de datos:", error);
    }

}

export default pool;
