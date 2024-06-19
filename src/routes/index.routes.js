import { Router } from "express";
import {pool} from '../db.js';
import { Getquery } from "../controller/index.controllers.js";


const router = Router();

router.get('/ping', Getquery);

export default router