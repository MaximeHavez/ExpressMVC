import express, {Request, Response} from 'express';
import demoRouter from './router/demoRouter';
import userRouter from "./router/userRouter";
import * as path from 'path';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.urlencoded())
app.use(express.json());
app.use(demoRouter);
app.use('/users', userRouter);
app.use('/bootstrap', express.static(path.join(process.cwd(),'node_modules/bootstrap/dist/css')));
app.use('/public', express.static(path.join(process.cwd(),'src/public')));


//configuration de ejs
app.set('views', path.join(process.cwd(), 'src/views'));
app.set('view engine', 'ejs');


// on lance le serveur
app.listen(port,()=> {
    console.log(`serveur lancé sur le port ${port}`)
    });