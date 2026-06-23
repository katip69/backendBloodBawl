import * as db from '../db/db.js'

export const getCompetitions = async() => {
    const competitions = await db.query(
        `SELECT competition_id,competition_name, start_date, finish_date FROM competition`
    );
    return competitions.rows;
}

export const insertCompetition = async(name, startDate, finishDate) => {
    console.log(name, startDate, finishDate);
    await db.query(
        `INSERT INTO competition (competition_name, start_date, finish_date) VALUES ($1, $2, $3)`,
        [name, startDate, finishDate]
    );
} 