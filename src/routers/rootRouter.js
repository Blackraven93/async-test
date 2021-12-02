import express from "express";
import {home} from "../controllers/homeController"


const rootRouter = express.Router();

rootRouter.get('/home', home);

export default rootRouter;