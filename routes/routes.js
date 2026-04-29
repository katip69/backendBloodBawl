import express from 'express'
import * as userController from '../controllers/userController.js'
import * as skillController from '../controllers/skillController.js'
import * as starCoachController from '../controllers/starCoachController.js'
import * as incentiveController from '../controllers/incentiveController.js'
import * as starPlayerController from '../controllers/starPlayerController.js'
import * as rosterController from '../controllers/rosterController.js'
import * as teamController from '../controllers/teamsController.js'

const router = express.Router();


router.get('/users/getCurrentUser',userController.currentUser);
router.post('/users/logout',userController.logout);
router.post('/users/login',userController.login);
router.get('/users/getUsers',userController.getUsers);
router.post('/users/insertUser',userController.insertUser);
router.delete('/users/deleteUser',userController.deleteUser);
router.get('/users/getRoles',userController.getRoles);

router.post('/skills/insertSkill',skillController.insertSkill);
router.delete('/skills/deleteSkill',skillController.deleteSkill);
router.get('/skills/getSkills',skillController.getSkills);
router.get('/skills/getSkillCategories',skillController.getSkillCategories);

router.get('/starCoaches/getStarCoaches',starCoachController.getStarCoaches);
router.post('/starCoaches/insertStarCoach',starCoachController.insertStarCoach);
router.delete('/starCoaches/deleteStarCoach',starCoachController.deleteStarCoach);

router.get('/incentives/getIncentives',incentiveController.getIncentives);
router.post('/incentives/insertIncentive',incentiveController.insertIncentive);
router.delete('/incentives/deleteIncentive',incentiveController.deleteIncentive);

router.get('/rosters/getRosters',rosterController.getRosters);
router.post('/rosters/insertRoster',rosterController.insertRoster);
router.delete('/rosters/deleteRoster',rosterController.deleteRoster);

router.get('/starPlayers/getStarPlayers',starPlayerController.getStarPlayers);
router.post('/starPlayers/insertStarPlayer',starPlayerController.insertStarPlayer);
router.delete('/starPlayers/deleteStarPlayer',starPlayerController.deleteStarPlayer);

router.get('/teams/getTeams',teamController.getTeams);
router.post('/teams/insertTeam',teamController.insertTeam);
router.delete('/teams/deleteTeam',teamController.deleteTeam);
router.get('/teams/getTeam',teamController.getTeam);

export default router;