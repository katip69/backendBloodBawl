import * as userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken';




export const login = async (req,res) => {
   try {
        const user = await userModel.getUser(req.body.username,req.body.password);
        const token = jwt.sign({user: user[0].username, rol: user[0].rol},'secret',{expiresIn:'1h'})
        res.status(200)
        .cookie('access_token',token,{
            httpOnly:true
        })
        .send({
            username:user[0].username,
            rol:user[0].rol
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
                rol: decoded.rol
            }); // o buscar en DB
        }catch (error){
            res.status(403).json({ error: 'Debe volver a iniciar sesión' });
        }
    }
}

export const logout = async (req,res) => {
    res.clearCookie('access_token').send({message:'Se ha cerrado sesion'})
}