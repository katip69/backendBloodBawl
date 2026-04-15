import * as skillModel from '../models/skillModel.js'
import jwt from 'jsonwebtoken';

export const getSkills = async (req,res) => {
   try {
        const skills = await skillModel.getSkills();
        res.status(200).json(skills);
    } catch (error) {
        res.status(404).json({ error: 'No hay skills disponibles' });
    }    
}

export const getSkillCategories = async (req,res) => {
    try {
        const categories = await skillModel.getSkillCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ error: 'No hay categorías disponibles' });
    }
}

export const insertSkill = async (req,res) => {
    const name = req.body.skillName;
    const category = req.body.skillCategory;
    const description = req.body.skillDescription;
    try {
        await skillModel.insertSkill(name, category, description);
        res.status(201).json({ message: 'Skill insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el skill' });
    }    
}  
