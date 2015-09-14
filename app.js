
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.server = http.createServer(app);

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendSatusCode(200)
});

console.log('listing on 8001')
app.server.listen(8001);
