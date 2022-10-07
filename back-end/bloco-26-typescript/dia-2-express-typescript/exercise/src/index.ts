import express from 'express'
import UserRouter from './routes/user.routes';

const app = express()

app.get('/', (_req, res) => res.status(200).send('Bem vindo API TypeScriptExpress'));

app.use(UserRouter);

app.listen(5000, () => console.log(`Running on port 5000`));
