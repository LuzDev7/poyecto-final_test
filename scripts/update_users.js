import "dotenv/config";
import pool from "../src/config/database.js";
import bcrypt from "bcrypt";

async function updateUsers() {
    try {
        const client = await pool.connect();

        console.log("🛠️  Iniciando actualización de tabla clientes...");

        // 1. Agregar columnas si no existen
        await client.query(`
            ALTER TABLE clientes 
            ADD COLUMN IF NOT EXISTS usuario VARCHAR(50) UNIQUE,
            ADD COLUMN IF NOT EXISTS password TEXT;
        `);
        console.log("✅ Columnas 'usuario' y 'password' aseguradas.");

        // 2. Hashear contraseña
        const saltRounds = 10;
        const passwordPlain = "1234567";
        const passwordHash = await bcrypt.hash(passwordPlain, saltRounds);

        // 3. Actualizar usuario ID 1 (Juan)
        await client.query(`
            UPDATE clientes 
            SET usuario = 'juan123', password = $1 
            WHERE id_cliente = 1
        `, [passwordHash]);
        console.log("✅ Usuario usuario juan123 actualizado con contraseña hasheada.");

        // 4. Actualizar otros usuarios vacíos para evitar nulls
        const res = await client.query("SELECT id_cliente FROM clientes WHERE usuario IS NULL");
        for (const row of res.rows) {
            const userTemp = `usuario${row.id_cliente}`;
            await client.query(`
                UPDATE clientes 
                SET usuario = $1, password = $2 
                WHERE id_cliente = $3
            `, [userTemp, passwordHash, row.id_cliente]);
            console.log(`ℹ️  Usuario generado: ${userTemp}`);
        }

        console.log("✨ Migración de usuarios completada con éxito.");
        client.release();
        process.exit(0);

    } catch (error) {
        console.error("❌ Error actualizando usuarios:", error);
        process.exit(1);
    }
}

updateUsers();
