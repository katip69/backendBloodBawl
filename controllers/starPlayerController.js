import  * as starPlayerModel from '../models/starPlayerModel.js'

export const getStarPlayers = async (req,res) => {
    try {
        const starPlayers = await starPlayerModel.getStarPlayers();
        res.status(200).json(starPlayers);
    } catch (error) {
        res.status(404).json({ error: 'No hay jugadores estrella disponibles' });
    }    
}

export const insertStarPlayer = async (req,res) => {
    const name = req.body.playerName;
    const teams = req.body.playerTeams;
    const description = req.body.playerDescription;
    const price = req.body.playerPrice;
    try {
        await starPlayerModel.insertStarPlayer(name, description, teams, price);
        res.status(201).json({ message: 'Jugador estrella insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el jugador estrella' });
    }    
}

export const deleteStarPlayer = async (req,res) => {
    const idStarPlayer = req.body.playerId;
    try {
        await starPlayerModel.deleteStarPlayer(idStarPlayer);
        res.status(200).json({ message: 'Jugador estrella eliminado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al eliminar el jugador estrella' });
    }    
}