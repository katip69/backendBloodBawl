import express from 'express'
import * as userController from '../controllers/userController.js'
import * as skillController from '../controllers/skillController.js'
import * as starCoachController from '../controllers/starCoachController.js'

const router = express.Router();


router.get('/users/getCurrentUser',userController.currentUser);
router.get('/skills/getSkills',skillController.getSkills);
router.get('/skills/getSkillCategories',skillController.getSkillCategories);

router.post('/users/logout',userController.logout);
router.post('/users/login',userController.login);
router.post('/skills/insertSkill',skillController.insertSkill);
router.delete('/skills/deleteSkill',skillController.deleteSkill);

router.get('/starCoaches/getStarCoaches',starCoachController.getStarCoaches);
router.post('/starCoaches/insertStarCoach',starCoachController.insertStarCoach);
router.delete('/starCoaches/deleteStarCoach',starCoachController.deleteStarCoach);

export default router;