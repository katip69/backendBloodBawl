import * as db from '../db/db.js'



export const getStarCoaches = async() => {
    const starCoaches = await db.query(
        `SELECT * FROM coaches`
    );
    return starCoaches.rows;
}

export const insertStarCoach = async(name, teams, description, price) => {
    await db.query(
        `INSERT INTO coaches (coachname, teams, descripcion, price) VALUES ($1, $2, $3, $4)`,
        [name, teams, description, price]
    );
}

export const deleteStarCoach = async(idStarCoach) => {
    await db.query(
        `DELETE FROM coaches WHERE coachid = $1`,
        [idStarCoach]
    );
}