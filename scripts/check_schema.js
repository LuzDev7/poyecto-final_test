import pg from "pg";
import "dotenv/config";

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

async function checkSchema() {
    try {
        const client = await pool.connect();
        console.log("✅ Conexión exitosa para inspección");

        const tablesRes = await client.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `);

        console.log("Tablas encontradas:", tablesRes.rows.map(r => r.table_name));

        for (const table of tablesRes.rows) {
            const columnsRes = await client.query(`
                SELECT column_name, data_type 
                FROM information_schema.columns 
                WHERE table_name = $1
            `, [table.table_name]);
            console.log(`\nEsquema de la tabla: ${table.table_name}`);
            console.table(columnsRes.rows);
        }

        client.release();
    } catch (error) {
        console.error("❌ Error inspeccionando esquema:", error);
    } finally {
        await pool.end();
    }
}

checkSchema();
