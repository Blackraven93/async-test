import express from "express";
import {getAPI} from "../controllers/apiController"


const apiRouter = express.Router();

apiRouter.get('/', getAPI);

export default apiRouter;