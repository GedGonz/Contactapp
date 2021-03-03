const express = require('express');
const app = express();
const apth = require('path');
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.listen(app.get('port'), () => {

    console.log(`Listen in port ${app.get('port')}`);
});