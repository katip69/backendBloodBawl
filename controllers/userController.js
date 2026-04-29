import * as userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken';




export const login = async (req,res) => {
   try {
        const user = await userModel.getUser(req.body.username,req.body.password);
        const token = jwt.sign({user: user[0].username, rol: user[0].rol, id: user[0].userid},'secret',{expiresIn:'1h'})
        res.status(200)
        .cookie('access_token',token,{
            httpOnly:true
        })
        .send({
            username:user[0].username,
            rol:user[0].rol,
            id: user[0].userid
        });
    } catch (error) {
        res.status(401).json({ error: 'Error al consultar la base de datos' });
    }    
}

export const currentUser = async (req,res) =>{
    const token = req.cookies.access_token;
    if(token){
        try{
            const decoded = jwt.verify(token, 'secret');
            res.json({ 
                username: decoded.user,
                rol: decoded.rol,
                id: decoded.id
            }); // falta verificar con la base de datos, esto se hara en un middleware seguramente TO-DO
        }catch (error){
            res.status(403).json({ error: 'Debe volver a iniciar sesión' });
        }
    }
}

export const logout = async (req,res) => {
    res.clearCookie('access_token').send({message:'Se ha cerrado sesion'})
}

export const getUsers = async (req,res) => {
    try {
        const users = await userModel.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json({ error: 'Error al obtener los usuarios' });
    }
}

export const insertUser = async (req,res) => {
    try {
        await userModel.insertUser(req.body.username, req.body.password, req.body.rol);
        res.status(201).json({ message: 'Usuario insertado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al insertar el usuario' });
    }
}    

export const deleteUser = async (req,res) => {
    try {
        await userModel.deleteUser(req.body.userId);
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(401).json({ error: 'Error al eliminar el usuario' });
    }
}

export const getRoles = async (req,res) => {
    try {
        const roles = await userModel.getRoles();        
        res.status(200).json(roles);
    } catch (error) {
        res.status(401).json({ error: 'Error al obtener los roles' });
    }
}

