import express from 'express'
import * as userController from '../controllers/userController.js'
import * as skillController from '../controllers/skillController.js'

const router = express.Router();


router.get('/users/getCurrentUser',userController.currentUser);
router.get('/skills/getSkills',skillController.getSkills);
router.get('/skills/getSkillCategories',skillController.getSkillCategories);

router.post('/users/logout',userController.logout);
router.post('/users/login',userController.login);
router.post('/skills/insertSkill',skillController.insertSkill);

export default router;