import * as db from '../db/db.js'

export const getIncentives = async() => {
    const incentives = await db.query(
        `SELECT * FROM incentives`
    );
    return incentives.rows;
}

export const insertIncentive = async(name, descripcion, teams, price) => {
    await db.query(
        `INSERT INTO incentives (incentivename, descripcion, teams,price) VALUES ($1, $2, $3, $4)`,
        [name, descripcion, teams, price]
    );
}

export const deleteIncentive = async(idIncentive) => {
    await db.query(
        `DELETE FROM incentives WHERE incentiveid = $1`,
        [idIncentive]
    );
}