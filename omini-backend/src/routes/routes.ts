import { Router } from 'express';
import { GoalsController } from '../controllers/GoalsController';

const router = Router();
const goalsController = new GoalsController();

router.post('/goals', (req, res) => goalsController.handle(req, res));

export { router };