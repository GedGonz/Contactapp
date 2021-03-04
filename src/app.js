import express from 'express';
import IndexRouter from './routes/contact'
const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(IndexRouter);

export default app