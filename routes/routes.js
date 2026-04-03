import express from 'express'
import * as controller from '../controllers/controller.js'

const router = express.Router();


router.get('/users/getCurrentUser',controller.currentUser);

router.post('/users/logout',controller.logout);
router.post('/users/login',controller.login);

export default router;