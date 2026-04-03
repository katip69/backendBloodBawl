import * as db from '../db/db.js'
import jwt from 'jsonwebtoken';


export const getUser = async(username,password) => {
    const text = await db.query(
        `SELECT username, rol FROM users WHERE username = $1 AND password = $2`,
        [username, password]
    );
    return text.rows;
};

