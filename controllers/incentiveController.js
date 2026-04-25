import * as incentiveModel from '../models/incentiveModel.js'

export const getIncentives = async (req,res) => {
    try {
        const incentives = await incentiveModel.getIncentives();
        res.status(200).json(incentives);
    } catch (error) {
        res.status(404).json({ error: 'No hay incentivos disponibles' });
    }    
}

export const insertIncentive = async (req,res) => {
    const name = req.body.incentiveName;
    const description = req.body.incentiveDescription;
    const teams = req.body.incentiveTeams;
    const price = req.body.incentivePrice;
    try {
        await incentiveModel.insertIncentive(name, description, teams, price);
        res.status(201).json({ message: 'Incentivo insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el incentivo' });
    }    
}

export const deleteIncentive = async (req,res) => {
    const idIncentive = req.body.incentiveId;
    try {
        await incentiveModel.deleteIncentive(idIncentive);
        res.status(200).json({ message: 'Incentivo eliminado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al eliminar el incentivo' });
    }    
}