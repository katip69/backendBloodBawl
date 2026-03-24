const db = require('../db/db.js')


exports.getUser = async() => {
    const text= await db.query('SELECT username FROM users');
    return text.rows;
};