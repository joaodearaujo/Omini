import { Router } from 'express';
import { GoalsController } from '../controllers/GoalsController';
import { GoalService } from '../services/GoalService';
import { GoalRepository } from '../repositories/GoalsRepository';

import { CrediCardRepository } from '../repositories/CreditCardsRepository';
import { CreditCardController } from '../controllers/CreditCardController';
import { CreditCardService } from '../services/CreditCardService';

import { TransactionsRepository } from '../repositories/TransactionsRepository';
import { TransctionsController } from '../controllers/TransactionsController';
import { TransactionsService } from '../services/TransactionsService';

const router = Router();

const goalRepository = new GoalRepository();
const goalService = new GoalService(goalRepository);
const goalsController = new GoalsController(goalService);

router.post('/goals', (req, res) => goalsController.handleCreate(req, res));
router.get('/goals', (req, res) => goalsController.handleList(req, res));


const crediCardRepository = new CrediCardRepository();
const creditCardService = new CreditCardService(crediCardRepository);
const creditCardController = new CreditCardController(creditCardService);

router.post('/mycards', (req, res) => creditCardController.handleCreate(req, res));
router.get('/mycards', (req, res) => creditCardController.handleList(req, res));


const transactionsRepository = new TransactionsRepository();
const transactionsService = new TransactionsService(transactionsRepository);
const transctionsController = new TransctionsController(transactionsService);

router.post('/transactions', (req, res) => creditCardController.handleCreate(req, res));
router.get('/transactions', (req, res) => creditCardController.handleList(req, res));



export { router };