import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.listen(app.get('port'), () => {
        console.log('server on Port ', app.get('port'));
    }

);