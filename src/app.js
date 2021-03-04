import express from 'express';
import IndexRouter from './routes/contact.routes';
import cors from 'cors'
const app = express();

//settings
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

//middlewaras
app.use(cors);
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to ContactApp' });
});

app.use('/api/contact', IndexRouter);



export default app