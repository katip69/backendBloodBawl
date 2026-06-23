import * as competitionModel from '../models/competitionModel.js'

export const getCompetitions = async (req,res) => {
    try {
        const competitions = await competitionModel.getCompetitions();
        res.status(200).json(competitions);
    } catch (error) {
        res.status(404).json({ error: 'No hay competiciones disponibles' });
    }    
}

export const insertCompetition = async (req,res) => {
    const name = req.body.competitionName;
    const startDate = req.body.startDate;
    const finishDate = req.body.finishDate;
    try {
        await competitionModel.insertCompetition(name, startDate, finishDate);
        res.status(201).json({ message: 'Competición insertada correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar la competición' });
    }    
}

export const getCompetition = async (req,res) => {
    const competitionId = req.params.competitionId;
    try {
        const competition = await competitionModel.getCompetition(competitionId);
        res.status(200).json(competition);
    } catch (error) {
        res.status(404).json({ error: 'No hay competiciones disponibles' });
    }    
}
