const model = require('../models/models.js');

exports.helloWorld = async (req, res) => {

    const user = await model.getUser();
    console.log(user)
    res.status(200).json({
        username: user[0].username
    });
};

