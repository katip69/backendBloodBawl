import { Pool } from "pg";

export const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'bloodbawl',
    password: '1234',
    port: 5432
});

export const query = (text, params) => pool.query(text, params);