import * as rosterModel from '../models/rosterModel.js'


export const getRosters = async (req,res) => {
    try {
        const rosters = await rosterModel.getRosters();
        res.status(200).json(rosters.rows);
    } catch (error) {
        res.status(404).json({ error: 'No hay rosters disponibles' });
    }    
}

export const insertRoster = async (req,res) => {
    const rosterName = req.body.rostername;
    const rosterPrice = req.body.rrprice;
    const apothecary = req.body.apothecary;
    try {
        await rosterModel.insertRoster(rosterName, rosterPrice, apothecary);
        res.status(201).json({ message: 'Roster insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el roster' });
    }    
}

export const deleteRoster = async (req,res) => {
    const rosterId = req.body.rosterId;
    try {
        await rosterModel.deleteRoster(rosterId);
        res.status(200).json({ message: 'Roster eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: 'Error al eliminar el roster' });
    }    
}
