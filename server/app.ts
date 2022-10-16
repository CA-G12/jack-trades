import { join } from 'path';
import express, { Application } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

const { NODE_ENV, PORT } = process.env
const app:Application = express();

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', PORT || 8000);

if(NODE_ENV === 'production'){
 app.use(express.static(join(__dirname, '..', 'client', 'build')));

 app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build'));
 })
}

export default app;
