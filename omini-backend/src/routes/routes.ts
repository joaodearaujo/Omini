import { Router } from 'express';
import { GoalsController } from '../controllers/GoalsController';
import { GoalService } from '../services/GoalService';
import { GoalRepository } from '../repositories/GoalsRepository';

const router = Router();

const goalRepository = new GoalRepository();
const goalService = new GoalService(goalRepository);
const goalsController = new GoalsController(goalService);

router.post('/goals', (req, res) => goalsController.handleCreate(req, res));
router.get('/goals', (req, res) => goalsController.handleList(req, res));

export { router };