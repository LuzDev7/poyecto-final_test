import "dotenv/config";
import pool from "./src/config/database.js";

async function getProducts() {
    try {
        const res = await pool.query("SELECT * FROM productos");
        console.log(JSON.stringify(res.rows, null, 2));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

getProducts();
