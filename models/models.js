const db = require('../db/db.js')


exports.getUser = async(username,password) => {
    const text = await db.query(
        `SELECT username, rol FROM users WHERE username = $1 AND password = $2`,
        [username, password]
    );
    return text.rows;
};