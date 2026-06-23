import * as competitionModel from '../models/matchModel.js'

export const getMatches = async (req,res) => {
    const competitionId = req.params.competitionId;
    try {
        const matches = await competitionModel.getMatches(competitionId);
        res.status(200).json(matches);
    } catch (error) {
        res.status(404).json({ error: 'No hay partidos disponibles' });
    }    
}

export const insertMatch = async (req,res) => {
    const competitionId = req.body.competitionId;
    const teamId1 = req.body.teamId1;
    const teamId2 = req.body.teamId2;
    const matchDate = req.body.matchDate;
    try {
        await competitionModel.insertMatch(competitionId, teamId1, teamId2, matchDate);
        res.status(201).json({ message: 'Partido insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el partido' });
    }    
}

export const insertMatches = async (req,res) => {
    const matches = req.body.matches;
    const competitionId = req.body.competitionId;
    console.log('Matches received:', competitionId); 
    try {
        matches.forEach(async (match) => {
            await competitionModel.insertMatch(competitionId, match.team1, match.team2, match.matchDate);
        });
        res.status(201).json({ message: 'Partidos insertados correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar los partidos' });
    }      
}         