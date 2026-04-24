import * as db from '../db/db.js'

export const getSkills = async() => {
    const skills = await db.query(
        `SELECT * FROM skills`
    );
    return skills.rows;
};

export const insertSkill = async(name,category,description) => {
    await db.query(
        `INSERT INTO skills (skillname, category, descripcion) VALUES ($1, $2, $3)`,
        [name, category, description]
    );
};

export const getSkillCategories = async() => {
    const categories = await db.query(
        `SELECT DISTINCT category FROM skills`
    );
    return categories.rows;
}

export const deleteSkill = async(idSkill) => {
    await db.query(
        `DELETE FROM skills WHERE id = $1`,
        [idSkill]
    );
};