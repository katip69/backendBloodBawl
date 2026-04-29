import * as teamsModel from '../models/teamsModel.js';

export const getTeams = async (req,res) => {
    try {
        const teams = await teamsModel.getTeams();
        res.status(200).json(teams);
    } catch (error) {
        res.status(401).json({ error: 'Error al obtener los equipos' });
    }
}

export const insertTeam = async (req,res) => {
    try {
        await teamsModel.insertTeam(req.body.teamName, req.body.rosterId, req.body.userId);
        res.status(201).json({ message: 'Equipo insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el equipo' });
    }
}

export const deleteTeam = async (req,res) => {
    try {
        await teamsModel.deleteTeam(req.body.teamId);
        res.status(200).json({ message: 'Equipo eliminado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al eliminar el equipo' });
    }
}

export const getTeam = async (req,res) => {
    try {
        const team = await teamsModel.getTeam(req.params.teamid);
        res.status(200).json(team);         
    } catch (error) {
        res.status(401).json({ error: 'Error al obtener el equipo' });
    }
}