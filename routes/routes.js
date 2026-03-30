const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/users',controller.helloWorld);

router.post('/users/login',controller.login);

module.exports = router;