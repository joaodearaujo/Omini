import express from 'express';
import cors from 'cors';
import { TransactionController } from './controllers/TransactionController';

const app = express();
const transactionController = new TransactionController();

app.use(cors());
app.use(express.json());

app.get('/transactions/:cardId', (req, res) => transactionController.pullTransaction(req, res));
app.post('/transactions', (req, res) => transactionController.createTransaction(req, res));

app.listen(3333, () => console.log("Omini API rodando na porta 3333"));