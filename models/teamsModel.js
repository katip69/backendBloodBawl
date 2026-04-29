import * as db from '../db/db.js'

export const getTeam = async(teamid) => {
    const team = await db.query(
        `SELECT * FROM teams WHERE teamid = $1`,
        [teamid]
    );
    return team.rows;
};

export const getTeams = async() => {
    const teams = await db.query(
        `SELECT teamid, teamname, users.username, roster.rostername, price, pj, g, e, p, tdf, tdc FROM teams INNER JOIN users ON teams.userid = users.userid INNER JOIN roster ON teams.race = roster.rosterid ORDER BY teamname`
    );
    return teams.rows;
}

export const insertTeam = async (teamname, rosterid, userid) => {
    await db.query(
        'INSERT INTO teams (teamname, race, userid) VALUES ($1, $2, $3)',
        [teamname, rosterid, userid]
    )
}

export const deleteTeam = async (teamid) => {
    console.log(teamid);
    await db.query('DELETE FROM teams WHERE teamid = $1', [teamid])
}