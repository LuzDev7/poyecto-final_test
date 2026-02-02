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
