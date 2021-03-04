import express from 'express';
import IndexRouter from './routes/contact.routes';
const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use('api/contact', IndexRouter);

export default app