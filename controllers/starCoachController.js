import * as starCoachModel from '../models/starCoachModel.js'


export const getStarCoaches = async (req,res) => {
   try {
        const starCoaches = await starCoachModel.getStarCoaches();
        res.status(200).json(starCoaches);
    } catch (error) {
        res.status(404).json({ error: 'No hay star coaches disponibles' });
    }    
}

export const insertStarCoach = async (req,res) => {
    const name = req.body.coachName;
    const teams = req.body.coachTeams;
    const description = req.body.coachDescription;
    const price = req.body.coachPrice;
    try {
        await starCoachModel.insertStarCoach(name, teams, description,price);
        res.status(201).json({ message: 'Star Coach insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el star coach' });
    }    
}   

export const deleteStarCoach = async (req,res) => {
    const idStarCoach = req.body.coachId;
    try {
        await starCoachModel.deleteStarCoach(idStarCoach);
        res.status(200).json({ message: 'Star Coach eliminado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al eliminar el star coach' });
    }    
}