const model = require('../models/models.js');


//esta hay que eliminarlo es debug
exports.helloWorld = async (req, res) => { 
    //const user = await model.getUser();
};

exports.login = async (req,res) => {
    
   try {
        const user = await model.getUser(req.body.username,req.body.password);
        res.status(200).json({
            username:user[0].username,
            rol:user[0].rol
        });
    } catch (error) {
        res.status(401).json({ error: 'Error al consultar la base de datos' });
    }
    
   

}

