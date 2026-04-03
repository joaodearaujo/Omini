import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json()); // Essencial para o Postman conseguir enviar JSON
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`🚀 Omini API running on http://localhost:${PORT}`);
});