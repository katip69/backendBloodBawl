import * as db from '../db/db.js'

export const getStarPlayers = async() => {
    const starPlayers = await db.query(
        `SELECT * FROM players`
    );
    return starPlayers.rows;
}

export const insertStarPlayer = async(name, description, teams, price) => {
    await db.query(
        `INSERT INTO players (playername, descripcion,teams, price) VALUES ($1, $2, $3, $4)`,
        [name, description, teams, price]
    );
}

export const deleteStarPlayer = async(idStarPlayer) => {
    console.log(idStarPlayer);
    await db.query(
        `DELETE FROM players WHERE playerid = $1`,
        [idStarPlayer]
    );
}   