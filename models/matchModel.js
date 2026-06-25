import * as db from '../db/db.js'

export const getMatches = async(competitionId) => {
    const matches = await db.query(
        `SELECT match_id, team_id1, team_id2, match_date, state, t1.teamname as team1_name, teams2.teamname as team2_name 
            FROM matches INNER JOIN teams as t1 ON matches.team_id1 = t1.teamid INNER JOIN teams AS teams2 ON matches.team_id2 = teams2.teamid WHERE competition_id = $1`,
        [competitionId]
    );
    console.log('Matches retrieved:', matches.rows); // Log the retrieved matches
    return matches.rows;
}

export const insertMatch = async(competitionId, teamId1, teamId2, matchDate) => {
    console.log(competitionId, teamId1, teamId2, matchDate);
    await db.query(
        `INSERT INTO matches (competition_id, team_id1, team_id2, match_date) VALUES ($1, $2, $3, $4)`,
        [competitionId, teamId1, teamId2, matchDate]
    );
}   