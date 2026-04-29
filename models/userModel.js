import * as db from '../db/db.js'



export const getUser = async(username,password) => {
    const user = await db.query(
        `SELECT userid,username, rol FROM users WHERE username = $1 AND password = $2`,
        [username, password]
    );
    return user.rows;
};

export const getUsers = async() => {
    const users = await db.query(
        `SELECT userid,username, rol FROM users`
    );
    return users.rows;
}

export const insertUser = async (username, password, rol) => {
    await db.query(
        'INSERT INTO users (username, password, rol) VALUES ($1, $2, $3)',
        [username, password, rol]
    )
}

export const deleteUser = async (userid) => {
    await db.query('DELETE FROM users WHERE userid = $1', [userid])
}   

export const getRoles = async() => {
    const roles = await db.query('SELECT DISTINCT rol FROM users');    
    return roles.rows;
}
