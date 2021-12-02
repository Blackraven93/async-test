import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import apiRouter from "./routers/apiRouter";

dotenv.config()

const app = express();
const logger = morgan('dev');




// views
app.set('views', process.cwd() + '/src/views');
app.set('view engine', 'pug');

// middleware
app.use(logger);

// json setting middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// static
app.use('uploads', express.static('uploads'));
app.use('/static', express.static('assets'))

// Router
app.use('/', rootRouter);
app.use('/api', apiRouter);

export default app;
