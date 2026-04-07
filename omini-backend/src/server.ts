import express from 'express';
import cors from 'cors';
import { goalController } from './controllers/GoalsController';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/goals', (req, res) => goalController.handle(req, res));

app.listen(3333, () => console.log("Omini API rodando na porta 3333"));