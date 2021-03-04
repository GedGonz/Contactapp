import express from 'express';
import IndexRouter from './routes/index'
const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(IndexRouter);

app.listen(app.get('port'), () => {
        console.log('server on Port ', app.get('port'));
    }

);