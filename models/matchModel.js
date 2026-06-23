import * as db from '../db/db.js'

export const getMatches = async(competitionId) => {
    const matches = await db.query(
        `SELECT match_id, team_id1, team_id2, match_date FROM match WHERE competition_id = $1`,
        [competitionId]
    );
    return matches.rows;
}

export const insertMatch = async(competitionId, teamId1, teamId2, matchDate) => {
    console.log(competitionId, teamId1, teamId2, matchDate);
    await db.query(
        `INSERT INTO matches (competition_id, team_id1, team_id2, match_date) VALUES ($1, $2, $3, $4)`,
        [competitionId, teamId1, teamId2, matchDate]
    );
}   