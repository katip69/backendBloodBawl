import * as db from '../db/db.js'



export const getUser = async(username,password) => {
    const user = await db.query(
        `SELECT username, rol FROM users WHERE username = $1 AND password = $2`,
        [username, password]
    );
    return user.rows;
};

