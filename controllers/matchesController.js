import * as matchModel from '../models/matchModel.js'

export const getMatches = async (req,res) => {
    const competitionId = req.params.competitionId;
    try {
        const matches = await matchModel.getMatches(competitionId);
        res.status(200).json(matches);
    } catch (error) {
        res.status(404).json({ error: 'No hay partidos disponibles' });
    }    
}

export const getFinishedMatches = async (req,res) => {
    const competitionId = req.params.competitionId;
    try {
        const matches = await matchModel.getFinishedMatches(competitionId);
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
    const state = req.body.state;
    try {
        await matchModel.insertMatch(competitionId, teamId1, teamId2, matchDate,state);
        res.status(201).json({ message: 'Partido insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el partido' });
    }    
}

export const insertMatches = async (req,res) => {
    const matches = req.body.matches;
    const competitionId = req.body.competitionId;
    try {
        matches.forEach(async (match) => {
            await matchModel.insertMatch(competitionId, match.team1, match.team2, match.matchDate, match.state);
        });
        res.status(201).json({ message: 'Partidos insertados correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar los partidos' });
    }      
}

export const setMatch = async (req,res) => {
    const match = req.body.match;
    try {
        await matchModel.setMatch(match);
        res.status(201).json({ message: 'Partido insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al actualizar el partido' });
    }      
}

export const deleteMatch = async (req,res) => {
    const match_id = req.body.match_id;
    try {
        await matchModel.deleteMatch(match_id);
        res.status(201).json({ message: 'Partidos eliminado' });
    } catch (error){
        res.status(401).json({ message: 'Error al eliminar el partido' });
    }
}