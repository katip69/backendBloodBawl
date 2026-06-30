import * as db from '../db/db.js'

export const getMatches = async(competitionId) => {
    const matches = await db.query(
        `SELECT match_id, team_id1, team_id2, match_date, state, t1.teamname as team1_name, teams2.teamname as team2_name,score1, score2
            FROM matches INNER JOIN teams as t1 ON matches.team_id1 = t1.teamid INNER JOIN teams AS teams2 ON matches.team_id2 = teams2.teamid WHERE competition_id = $1`,
        [competitionId]
    );
    return matches.rows;
}

export const getFinishedMatches = async(competitionId) => {
    const matches = await db.query(
        `SELECT match_id, team_id1, team_id2, match_date, state, t1.teamname as team1_name, teams2.teamname as team2_name,score1, score2
            FROM matches INNER JOIN teams as t1 ON matches.team_id1 = t1.teamid INNER JOIN teams AS teams2 ON matches.team_id2 = teams2.teamid WHERE competition_id = $1 and state = 'Finalizado'`,
        [competitionId]
    );
    return matches.rows;
}

export const insertMatch = async(competitionId, teamId1, teamId2, matchDate,state) => {
    await db.query(
        `INSERT INTO matches (competition_id, team_id1, team_id2, match_date, state) VALUES ($1, $2, $3, $4, $5)`,
        [competitionId, teamId1, teamId2, matchDate, state]
    );
}   

export const setMatch = async(match) => {
    await db.query(`UPDATE matches set match_date = $1, score1 = $2, score2 = $3, state = $4 WHERE match_id = $5`, 
        [match.match_date, match.score1, match.score2, match.state, match.match_id]
    );
}

export const deleteMatch = async (match_id) => {
    await db.query(`DELETE FROM matches WHERE match_id = $1`, [match_id]);
}

