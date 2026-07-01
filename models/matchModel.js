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
    const score = 0;
    await db.query(
        `INSERT INTO matches (competition_id, team_id1, team_id2, match_date, state, score1, score2) VALUES ($1, $2, $3, $4, $5, $6, $6)`,
        [competitionId, teamId1, teamId2, matchDate, state, score]
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

export const getRanking = async (competitionId) => {
    if (competitionId == -1){
        const ranking = await db.query(`WITH pm AS(
        SELECT team_id1 AS team_id, score1 AS favor_goals, score2 AS aganist_goals FROM matches WHERE state = 'Finalizado'
            UNION ALL
        SELECT team_id2 AS team_id, score2 AS favor_goals, score1 AS aganist_goals FROM matches WHERE state = 'Finalizado')
        SELECT t.teamname,SUM(pm.favor_goals) as favor_goals, SUM(pm.aganist_goals) as aganist_goals, 
            CAST(SUM(CASE WHEN pm.favor_goals > pm.aganist_goals THEN 1 ELSE 0 END) AS INT) as wins,
            CAST(SUM(CASE WHEN pm.favor_goals = pm.aganist_goals THEN 1 ELSE 0 END) AS INT) as draw,
            CAST(SUM(CASE WHEN pm.favor_goals < pm.aganist_goals THEN 1 ELSE 0 END) AS INT) as lose,
            CAST(SUM(CASE WHEN pm.favor_goals > pm.aganist_goals THEN 3
                          WHEN pm.favor_goals = pm.aganist_goals THEN 1
                          ELSE  0 END) AS INT) as points     
        FROM pm INNER JOIN teams AS t ON pm.team_id = t.teamid GROUP BY t.teamid ORDER BY points DESC`
        );
        return ranking.rows;
    }
    else {
        console.log(competitionId)
        const ranking = await db.query(`WITH pm AS(
        SELECT team_id1 AS team_id, score1 AS favor_goals, score2 AS aganist_goals FROM matches WHERE state = 'Finalizado' AND competition_id = $1
            UNION ALL
        SELECT team_id2 AS team_id, score2 AS favor_goals, score1 AS aganist_goals FROM matches WHERE state = 'Finalizado' AND competition_id = $1)
        SELECT t.teamname,SUM(pm.favor_goals) as favor_goals, SUM(pm.aganist_goals) as aganist_goals, 
            CAST(SUM(CASE WHEN pm.favor_goals > pm.aganist_goals THEN 1 ELSE 0 END) AS INT) as wins,
            CAST(SUM(CASE WHEN pm.favor_goals = pm.aganist_goals THEN 1 ELSE 0 END) AS INT) as draw,
            CAST(SUM(CASE WHEN pm.favor_goals < pm.aganist_goals THEN 1 ELSE 0 END) AS INT) as lose,
            CAST(SUM(CASE WHEN pm.favor_goals > pm.aganist_goals THEN 3
                          WHEN pm.favor_goals = pm.aganist_goals THEN 1
                          ELSE  0 END) AS INT) as points     
        FROM pm INNER JOIN teams AS t ON pm.team_id = t.teamid GROUP BY t.teamid ORDER BY points DESC`,[competitionId]
        );
        return ranking.rows;
    }
}
