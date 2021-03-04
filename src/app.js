import express from 'express';
import IndexRouter from './routes/contact.routes';

const app = express();

//settings
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to ContactApp' });
});

app.use('/api/contact', IndexRouter);



export default app